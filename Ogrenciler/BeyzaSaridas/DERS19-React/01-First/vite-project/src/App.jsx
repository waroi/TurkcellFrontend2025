import { useState } from 'react'
import './App.css'
import Deneme from './components/Deneme'
import DenemeClass from './components/DenemeClass'
 
function App() {
  const [count,setCount]=useState(0);
  return (
    <>
     <h1>React</h1>
      <div className="card">Merhaba React
      </div>
     <Deneme isim="Beyza" yas={23}/>
     <Deneme isim="xccc" yas={20}/>
    <DenemeClass isim="beyzaaaa"/>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>Artır</button>
    <button onClick={()=>setCount(count-1)}>Azalt</button>

    </>
  )
}

export default App
