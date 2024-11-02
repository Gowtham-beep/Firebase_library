import {getDatabase,ref,set} from "firebase/database"
import {app} from "./firebase"


function writeUserData(username,age){
  const db=getDatabase(app)
  set(ref(db,"user/"),{
    username:"Gowtham",
    age:21,
  })
}
function App() {
  return (
    <>
    <center>
      <h1>Book Store</h1>
      <button onClick={writeUserData}>Put Data</button>
    </center>
    </>
  )
}

export default App
