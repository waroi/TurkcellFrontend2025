import {useState} from "react"
import Deneme from './components/Deneme';
import DenemeClass from './components/DenemeClass';

import './App.css';

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <h1> React</h1>
      <div className='card'>Merhaba React</div>
      <Deneme isim="Ahmet" yas={25} />
      <Deneme isim="Varol" yas={26} />
      <DenemeClass isim="Merhaba"/> 
      <div>{count}</div>
      <button onClick={() =>setCount(count +1)}>Artır</button>
      <button onClick={() =>setCount(count -1)}>Azalt</button>
      </>
  );
}

export default App;
