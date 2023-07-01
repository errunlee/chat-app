import { initializeApp } from "firebase/app";
import { getAnalytics, setUserId } from "firebase/analytics";
import {getAuth, GoogleAuthProvider,onAuthStateChanged,signInWithPopup } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

import { useEffect ,useState} from "react";


const firebaseConfig = {
  apiKey: "AIzaSyAR1BwR6NMNCvoOahzxiwJrg5MRytsTRW4",
  authDomain: "kura-garam.firebaseapp.com",
  projectId: "kura-garam",
  storageBucket: "kura-garam.appspot.com",
  messagingSenderId: "313437891951",
  appId: "1:313437891951:web:0bb0b51d0da788e63b0c9a",
  measurementId: "G-HVM5RH8GG3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider(app);

// logged in or not

export function useAuth(){
    const [currentUser,setCurrentUser]=useState()
    useEffect(()=>{
       const unsub= onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        })
        return ()=>unsub();
    },[])
    return currentUser;
}

// storage

export const db=getFirestore(app)

