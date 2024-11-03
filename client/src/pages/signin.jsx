import {React,useState} from "react"
import {useFirebase} from '../context/firebase'

const Signin=()=>{
    const[emial,setEmial]=useState('')
    const[password,setPassword]=useState('')
    const Firebase=useFirebase()
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
        type="password" 
        placeholder="Enter your Password here"></input>
        <br/>
        <button onClick={()=>Firebase.signinUserWithEmailAndPassword(emial,password)}>Sign in</button>
    </div>
)
}
export default Signin