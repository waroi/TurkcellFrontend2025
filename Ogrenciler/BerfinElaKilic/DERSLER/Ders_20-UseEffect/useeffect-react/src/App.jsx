import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mount aşamasında useEffect çalıştı.");
  }, []); //boş array verildiği için sadece bir kez çalışır.
  useEffect(() => {
    console.log("Update aşamasında useEffect çalıştı. State değişti.");
  }, [count]); //state değişti. Update aşamasında çalışır.
  useEffect(() => {
    console.log("Update aşamasında useEffect çalıştı.");
  }); //Update aşamasında çalışır.
  useEffect(() => {
    return () => {
      console.log();
    };
  });

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>
        React UseEffect {count} kez tıklandı.
      </h1>
    </>
  );
}

export default App;
