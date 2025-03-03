import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={`app ${theme}`}>
        <h1>Context Uygulama</h1>
        <Button />
      </div>
    </>
  );
}

export default App;
