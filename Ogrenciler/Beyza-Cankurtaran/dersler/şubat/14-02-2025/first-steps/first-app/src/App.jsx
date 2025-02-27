import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import {Component} from "react";
import Deneme from "./components/Deneme";
import DenemeClass from "./components/DenemeClass";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">Merhaba react
      </div>
      <Deneme isim="beyza" yas={23}/>
      <DenemeClass isim="beyzoloşko"></DenemeClass>
      <div>{count}</div>
      <button onClick={()=>{setCount(count+1)}}>Arttır</button>
      <button onClick={()=>{setCount(count-1)}}>Azalt</button>
    </>
  )
}

export default App;
