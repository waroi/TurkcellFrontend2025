import { useState } from "react";
import Deneme from "./components/Deneme";
import DenemeClass from "./components/DenemeClass";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
    return (
    <>
      <h1>React</h1>
      <div className="card">Merhaba React</div>
      <Deneme isim="Varol" yas={27}></Deneme>
      <Deneme isim="Ece" yas={23}></Deneme>
      <DenemeClass isim="Merhaba"></DenemeClass>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>Arttır</button>
    </>
  );
}

export default App;
