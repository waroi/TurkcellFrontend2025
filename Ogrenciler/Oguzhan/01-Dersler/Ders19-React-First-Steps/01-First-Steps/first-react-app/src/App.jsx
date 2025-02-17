import { useState } from "react";
import "./App.css";
import Deneme from "./components/Deneme";
import DenemeClass from "./components/DenemeClass";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>React</h1>
      <div className="card">Merhaba React</div>
      <Deneme isim="Halil" yas={25} />
      <Deneme isim="Ahmet" yas={35} />
      <DenemeClass isim="Class Deneme" />

      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <button onClick={() => setCount(count - 1)}>Arttır</button>
    </>
  );
}

export default App;
