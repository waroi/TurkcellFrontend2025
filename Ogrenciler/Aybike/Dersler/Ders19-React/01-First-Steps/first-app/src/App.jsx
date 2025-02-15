import { useState } from 'react'
import './App.css'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
      
        <Test name="Aybike" age="25" />

        <button onClick={() => setCount(() => count + 1)}>
          increase
        </button>
        <button onClick={() => setCount(() => count - 1)}>
          decrease
        </button>

        {count}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
