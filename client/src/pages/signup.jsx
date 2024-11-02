import React from "react";
import { useState } from "react";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth=getAuth(app)
const Signup=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const createUSer=()=>{
        createUserWithEmailAndPassword(auth,email,password).then(alert('user creted successfull'))
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
            <button onClick={createUSer}>Sign UP</button>
        </div>
    )
}
export default Signup