import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
const [username,setUserName]=useState("");
  return (
    <>
     <Navbar username={username}/>
    </>
  )
}

export default App
