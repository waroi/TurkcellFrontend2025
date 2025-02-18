import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mount aşamasında çalışır");
  }, []);
  useEffect(() => {
    console.log("Update aşamasında çalışır, State değişti");
  }, [count]);
  useEffect(() => {
    console.log("Update aşamasında çalışır, Her renderda çalışır");
  });
  useEffect(() => {
    return;
    () => {
      console.log("Unmount aşamasında çalışır, ");
    };
  }, []);
  return (
    <>
      <h1
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Use Effect {count}
      </h1>
    </>
  );
}

export default App;
