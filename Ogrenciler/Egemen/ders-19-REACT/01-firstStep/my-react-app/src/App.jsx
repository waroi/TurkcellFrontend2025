import { useState } from "react";
import React from "react";
import Deneme from "./components/Deneme";
import "./App.css";
import DenemeClass from "./components/DenemeClass";
function App() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <h1>React</h1>
      <div className="card">Merhaba React</div>
      <Deneme isim="Egemen" yas={25} />
      <Deneme isim="Sila" yas={25} />
      <DenemeClass isim="merhaba"></DenemeClass>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
    </React.Fragment>
  );
}

export default App;
