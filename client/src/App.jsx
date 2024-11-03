import Signup from './pages/signup'
import Signin from './pages/signin'
import {useEffect,useState} from 'react'
import {FirebaseAuth} from "./context/firebase"
import {onAuthStateChanged,signOut} from 'firebase/auth'


function App() {
const auth =FirebaseAuth
const [user,setUser]=useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user){
        setUser(user)
      }else{
        console.log('You are logged out')
        setUser(null)
      }
    })
  },[])
  if(user===null){
    return(<>
    <center>
      <h1>Book Store</h1>
      <Signup/>
      <Signin/>
      </center>
    </>)
  }
  return (
    <>
    <p>{user.email} welcome to Book Store</p>
    <button onClick={()=>signOut(auth)}>Logout</button>
    </>
  )
}

export default App
