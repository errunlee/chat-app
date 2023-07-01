import React from 'react'
import { provider, auth } from '../firebase'
import { signInWithPopup } from "firebase/auth";

const Login = () => {
    const signUpGoogle = async () => {
        const user=await signInWithPopup(auth, provider)
        console.log(user)
    }
    return (
        <div>
            <button onClick={signUpGoogle}> Sign Up using google</button>
        </div>
    )
}

export default Login
