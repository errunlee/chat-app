import React, { useEffect } from 'react'
import { provider, auth } from '../firebase'
import { signInWithPopup } from "firebase/auth";
const Login = () => {
    const signUpGoogle = async () => {
        const user=await signInWithPopup(auth, provider)
    }
    document.title='KuraGaram | Login'
    return (
        <div className='d-flex justify-content-center flex-column align-items-center text-light p-3'>
            <h2>Welcome to Kura Garam(early access). </h2>
            <button style={{maxWidth:'max-content'}}className='btn btn-info btn-lg' onClick={signUpGoogle}> Sign in using Google <img src='./assets/google.svg'/></button>
            <p className='mt-4'>Copyright &copy;  2023.</p>
            <p>All rights reserved.</p>
        </div>
    )
}

export default Login
