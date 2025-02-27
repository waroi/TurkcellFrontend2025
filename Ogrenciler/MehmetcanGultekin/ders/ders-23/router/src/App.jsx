import Router from './routes/Router'
import { NavLink } from 'react-router'
import './App.css'

function App() {

  return (
    <>
    <ul>
      <li>
        <NavLink to = "/">Anasayfa</NavLink>
      </li>
      <li>
        <NavLink to = "/user">Kullanıcı</NavLink>
      </li>
      <li>
        <NavLink to = "/parametre/123">Parametre</NavLink>
      </li>
    </ul>
      <Router></Router>
    </>
  )
}

export default App
