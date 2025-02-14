import {useState} from "react";
import Deneme from "./components/Deneme";
import DenemeClass from "./components/DenemeClass";

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>React</h1>
      <div className="card">Merhaba React</div>
      <Deneme yas="24"></Deneme>
      <Deneme isim="Ayşe" yas={33}></Deneme>
      <DenemeClass isim="zey"></DenemeClass>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>Arttır</button>
      <button onClick={()=>setCount(count-1)}>Azalt</button>
    </>
  )
}

export default App;