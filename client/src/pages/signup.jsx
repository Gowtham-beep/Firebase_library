import React from "react";
import { useState } from "react";
import {useFirebase,FirebaseAuth} from "../context/firebase"
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth'



const Signup=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const Firebase=useFirebase()
    console.log("Firebase",Firebase)
    
    //Signin with google
    const googleProvider = new GoogleAuthProvider()
    const signupWithGoogle=()=>{
        signInWithPopup(FirebaseAuth,googleProvider)
    }


    return(
        <div className="sign-up-page">
            <h1>Signup page</h1>
            <label>Email</label>
            <input 
            onChange={(e)=>setEmail(e.target.value)} 
            value={email} 
            type="email" 
            placeholder="Enter yoir emial here"/>
            <br/>
            <label>Password</label>
            <input 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            type="password" 
            placeholder="Enter yoir password here"/>
            <br/>
            <button onClick={signupWithGoogle}>Signin with Google</button>
            <button onClick={()=>Firebase.signupUserWithEmailAndPassword(email,password)}>Signup</button>
        </div>
    )
}
export default Signup