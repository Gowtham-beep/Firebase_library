import React from "react";
import { useState } from "react";
import {useFirebase,} from "../context/firebase"


const Signup=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const Firebase=useFirebase()
    console.log("Firebase",Firebase)
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
            <button onClick={()=>Firebase.signupUserWithEmailAndPassword(email,password)}>Signup</button>
        </div>
    )
}
export default Signup