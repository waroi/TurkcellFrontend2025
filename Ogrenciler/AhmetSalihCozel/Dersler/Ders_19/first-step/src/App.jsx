import { useState } from 'react'
import './App.css'
import Deneme from "./deneme.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React</h1>
      <div className='card'>Merhaba React</div>
      <Deneme isim="Varol" yas={25}></Deneme>
      <Deneme isim="Ahmet" yas={27}></Deneme>
      <div>{count}</div>
      <button onClick={()=>{ setCount(count+1)}}>Arttır</button>
      <button onClick={()=>{ setCount(count-1)}}>Azalt</button>
    </>
  )
}

export default App
