import {React,useState} from "react"
import { app } from "../firebase"
import { getAuth,signInWithEmailAndPassword } from "firebase/auth"

const Signin=()=>{
    const auth=getAuth(app)
    const[emial,setEmial]=useState('')
    const[password,setPassword]=useState('')

    const signinUser=()=>{
        signInWithEmailAndPassword(auth,emial,password)
        .then((val)=>{console.log("Signin Success")})
        .catch((error)=>{console.log(error)})
    }

return(
    <div className="sign-in-page">
        <h1>Signin page</h1>
        <label>Emial</label>
        <input 
        onChange={(e)=>setEmial(e.target.value)}
        value={emial}
        type="email" 
        placeholder="Enter your Email here"></input>
        <br/>
        <label>Password</label>
        <input 
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        type="passwprd" 
        placeholder="Enter your Password here"></input>
        <br/>
        <button onClick={signinUser}>Sign in</button>
    </div>
)
}
export default Signin