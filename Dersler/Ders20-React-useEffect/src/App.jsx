import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mount aşamasında useEffect çalıştı.");
  }, []); // Boş array verildiği için sadece bir kere çalışır. Mount aşamasında çalışır.
  useEffect(() => {
    console.log("Update aşamasında useEffect çalıştı. State değişti.");
  }, [count]); // State Değişti, Update aşamasında çalışır.
  useEffect(() => {
    console.log("Update aşamasında useEffect çalıştı.");
  }); // Update aşamasında çalışır.
  useEffect(() => {
    return () => {
      console.log("Unmount aşamasında useEffect çalıştı.");
    };
  }, []); // Boş array verildiği için sadece bir kere çalışır. Unmount aşamasında çalışır.
  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>
        React useEffect {count} kez tıklandı
      </h1>
    </>
  );
}

export default App;
