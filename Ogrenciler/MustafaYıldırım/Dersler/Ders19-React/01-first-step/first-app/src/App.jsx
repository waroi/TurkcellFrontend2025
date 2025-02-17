import Deneme from './components/deneme'
import DenemeClass from './components/DenemeClass'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, Setcount] = useState(0);
  return (
    <>
      <h1>React</h1>
      <div className="card">Merhaba React</div>
      <Deneme yas={25}/>
      <Deneme isim="ahmet" yas="32"/>
      <DenemeClass isim="m" />
      <div>{count}</div>
      <button onClick={()=>Setcount(count+1)}>Arttır</button>
      <button onClick={()=>Setcount(count-1)}>Azalt</button>
      
    </>
  )
}

export default App
