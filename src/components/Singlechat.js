

import React from 'react'
import { useAuth } from '../firebase'
import { auth } from '../firebase';
function Singlechat({ msg }) {
    const myMsg=msg.uid===auth.currentUser.uid
    return (
        <div>
            <div className={`d-flex align-items-center ${myMsg?'  flex-row-reverse':'received'}`}>
                <img className='avatar' src={msg.photoURL} />
                <p  className={`border-0 my-2 mx-2 border px-3 py-2 message ${myMsg?'bg-primary text-white':'bg-white'}`}>{msg.msg}</p>

            </div>
        </div>
    )
}

export default Singlechat
