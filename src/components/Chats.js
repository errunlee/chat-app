import './chats.css'
import React,{useEffect, useRef,useState} from 'react'
import { db, useAuth } from '../firebase'
import {addDoc,collection,
        serverTimestamp,
        onSnapshot,orderBy, query,
        
} from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import Singlechat from './Singlechat'
import {auth} from '../firebase'

function Chats() {
    const [msgs,setMsgs]=useState([])
    const [err,setErr]=useState(false)
    const currentUser=useAuth();
    const msgRef=useRef()
    const scrollRef = useRef(null);


     function scrollIntoView() {
       scrollRef.current.scrollIntoView({behavior:'smooth'})
     }
    
     useEffect(()=>{
        scrollIntoView()
     },[msgs])

    const sendMsg=async (e) => {
        e.preventDefault();
        if(msgRef.current.value===''){
            setErr(true);
            return;
        }
        setErr(false)
        const colref=collection(db,'chats')
        const payload={
            msg:msgRef.current.value,
            createdAt:serverTimestamp(),
            photoURL:currentUser.photoURL,
            uid:currentUser.uid
        }
        msgRef.current.value=''
        await addDoc(colref,payload)
        scrollIntoView();
    }


    useEffect(()=>{
        const colref=collection(db,'chats')
        const q=query(colref,orderBy('createdAt','asc'))


        const snap=onSnapshot(q,(snapshots)=>{
            const data=[]
            snapshots.docs.map((snap)=>{
                data.push({...snap.data(),id:snap.id})
            })
            console.log(data)
            setMsgs(data)

        })
        return () => snap()

    },[])

    useEffect(()=>{
        const interval=setTimeout(()=>{
            setErr(false)
        },1000)
        return ()=>{clearTimeout(interval)}
    },[err])

  return (
    <div className='d-flex justify-content-center align-items-center flex-column wrapper'>
    <header className='text-light d-flex justify-content-around align-items-center'><h3 className='mx-2'>Made with <img src='./assets/heart.svg' /> by errunlee</h3>
    <button className='btn btn-secondary ' onClick={()=>auth.signOut()}> Logout</button>
    </header>
    <div className='msg-box border border-dark  overflow-auto p-3 pb-0 ' >
        {
            msgs.map((msg)=>{
                return(
                    <div key={msg.id}>
                       <Singlechat msg={msg}/>
                    </div>
                )
            })
        }
        <div ref={scrollRef}></div>
         <div className="d-flex input-box  bg-white">
    </div>
    </div>
    
    <form className="d-flex bg-dark">
    <input className='bg-dark' ref={msgRef} type='text'/>
    <button type='submit' onClick={sendMsg} className='btn btn-primary rounded-0'>
     <img className='send-btn' src='./assets/send.svg'/>
    </button>
    </form>
   
    {err && <p className='bg-danger p-2 rounded text-white position-fixed err-msg'>Message can't be empty.</p>}

    </div>

  )
}

export default Chats
