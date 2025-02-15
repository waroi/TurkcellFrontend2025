import { useState } from 'react'
import Deneme from './components/Deneme'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        React
      </div>
      <Deneme isim="Fatih" yas={25} />
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </>
  )
}

export default App
