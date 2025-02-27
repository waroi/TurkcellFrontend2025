import { useState } from 'react'
import {NavLink} from 'react-router';
import './App.css'
import Router from './rotes/Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ul>
      <li><Navlink to="/">Anasayfa</Navlink></li>
      <li><Navlink to="/user">Kullanıcı</Navlink></li>
    </ul>
    <Router/>
    </>
  )
}

export default App
