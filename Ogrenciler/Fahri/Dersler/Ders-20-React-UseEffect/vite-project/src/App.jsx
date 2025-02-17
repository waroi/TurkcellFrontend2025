import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Değişti");
  }, [count]);
  return (
    <>
      <div onClick={() => setCount(count + 1)}>{count}</div>
    </>
  );
}

export default App;
