import { useState } from 'react'
import './App.css'
import DenemClass from './components/DenemClass'
import Deneme from './components/Deneme'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <> strict modela aynı kafa, extra bir divden kurtarır mesela
    <>

      <div>
        {count}
      </div>
      <br />
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <button onClick={() => setCount(count + 999)}>Arttır (+999)</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
      <button onClick={() => setCount(count - 999)}>Azalt (-999)</button>



      <h1>React</h1>
      <Deneme isim='Yunus' yas={23} jobs='student' />
      <Deneme isim='Varol' yas={30} jobs='teacher and developer' />
      <div className="card">
        Merhaba React
      </div>
      {/* <DenemClass isim='YUNUSS' /> */}



    </>
  )
}

export default App
