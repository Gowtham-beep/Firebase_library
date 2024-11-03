import { createContext,useContext} from "react";
import {initializeApp} from "firebase/app"
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB0sef8Foz6-Wx4WewPf9yQ6C1Sh46Q4uA",
  authDomain: "bookstore-app-c93df.firebaseapp.com",
  projectId: "bookstore-app-c93df",
  storageBucket: "bookstore-app-c93df.firebasestorage.app",
  messagingSenderId: "317169085253",
  appId: "1:317169085253:web:e8bb905192f841b06dec2c",
  databseURL:"https://bookstore-app-c93df-default-rtdb.firebaseio.com",
};

const FirebaseApp=initializeApp(firebaseConfig) 
const FirebaseContext=createContext(null)


//custom hook to consume the context
export const useFirebase=()=>useContext(FirebaseContext)

export const FirebaseAuth=getAuth(FirebaseApp)

//context provider
export const FirebaseProvider=(props)=>{
//prop signup function
const signupUserWithEmailAndPassword=(email,password)=>{
  return createUserWithEmailAndPassword(FirebaseAuth,email,password)
  }
//prop function to signin
const signinUserWithEmailAndPassword=(email,password)=>{
  signInWithEmailAndPassword(FirebaseAuth,email,password)
  .then((val)=>alert("signin success"))
  .catch((error)=>console.log("signin error:",error))
}

  return <>
  <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinUserWithEmailAndPassword}}>
    {props.children}
  </FirebaseContext.Provider>
  </>
}


 