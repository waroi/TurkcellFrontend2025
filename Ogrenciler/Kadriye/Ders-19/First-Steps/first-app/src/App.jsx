import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Deneme from "./components/deneme";
import DenemeClass from "./components/DenemeClass";
function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Hello React</h1>
      <div className="card">Merhaba React</div>
      <Deneme yaş={"25"}></Deneme>
      <Deneme isim="Hikmet" yaş={"18"}></Deneme>
      <DenemeClass isim="-Varol-" />
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
