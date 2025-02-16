import {useState} from 'react'
import Deneme from './components/Deneme'
import DenemeClass from './components/DenemeClass'

import './App.css'

function App() {
  const [count, setCount] = useState(0) //count değeri tutuyor setCount ise count değerini değiştiriyor
  return (
    <>
      <h1>React</h1>
      <div className="card">Merhaba React</div>
        <Deneme isim="Mehmet" yas={25}/>
        <Deneme isim="Ali" yas={30}/>
        <DenemeClass isim = "Ahmet" />
        <div>{count}</div>
        <button onClick={()=> setCount(count + 1)}>arttır</button> 
        <button onClick={()=> setCount(count - 1)}>azalt</button>

    </>
  )
}

export default App
