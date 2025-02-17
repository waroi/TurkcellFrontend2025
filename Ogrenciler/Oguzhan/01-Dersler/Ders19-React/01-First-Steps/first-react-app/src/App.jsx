import { useState } from "react";
import "./App.css";
import Deneme from "./components/Deneme";
import DenemeClass from "./components/DenemeClass";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>

      <button onClick={() => setCount(count - 1)}>Arttır</button>
    </>
  );
}

export default App;
