import { useState } from 'react';
import Deneme from './components/Deneme.jsx';
import './App.css'


// function App() {

//   return (
//     <>
//       <h1>React</h1>
//       <div className='card'> Merhaba React</div>
//       <Deneme isim="seda" yas={20}/>
//     </>
//   )
// }

// export default App;


function App() {
  const [count, setCount] = useState(0);
  return(
    <>
    <div>{count}</div>
    <button onClick={()=> setCount(count+1)}>Artır</button>
    <button onClick={()=> setCount(count-1)}>Azalt</button>

    </>
  );
};

export default App;
