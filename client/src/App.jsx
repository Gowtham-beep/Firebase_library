import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from "./firebase"
import Signup from './pages/signup'
import Signin from './pages/signin'

const auth=getAuth(app)

function App() {
  return (
    <>
    <center>
      <h1>Book Store</h1>
      <Signup/>
      <Signin/>
      </center>
    </>
  )
}

export default App
