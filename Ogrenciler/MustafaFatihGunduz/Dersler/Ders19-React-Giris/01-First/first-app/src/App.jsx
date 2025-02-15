import React, {useState} from 'react'
import './App.css'
import Deneme from './deneme'
import DenemeClass from './assets/deneme_class'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
      <p>Merhaba React</p>
      <Deneme name="Mustafa" age="25" />
      <Deneme name="Fatih" age="26" />
      <DenemeClass name="Gündüz" age="28" />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
      <button onClick={() => setCounter(counter - 1)}>Azalt</button>
      </div>
    </>
  )
}

export default App
