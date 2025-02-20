import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("Mount aşaması");
  }, []);
  useEffect(() => {
    console.log("Update aşaması, state değişti");
  }, [count]);
  useEffect(() => {
    console.log("Update aşaması useEffect çalıştı");
  });
  useEffect(() => {
    return () => {
      console.log("UnMount aşaması");
    }
  }, []);
  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>
        React use efect {count} kez tıklandı.
      </h1>
    </>
  )
}

export default App
