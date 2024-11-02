import { createContext,useContext} from "react";
import {initializeApp} from "firebase/app"
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

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


//custom hook
export const useFirebase=()=>useContext(FirebaseContext)

const FirebaseAuth=getAuth(FirebaseApp)

//context provider
export const FirebaseProvider=(props)=>{
//prop signup function
const signupUserWithEmailAndPassword=(email,password)=>{
  return createUserWithEmailAndPassword(FirebaseAuth,email,password)
  }
  return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword}}>
    {props.children}
  </FirebaseContext.Provider>
}


 