import { NavLink } from 'react-router'
import './App.css'
import Router from './routes/Router'

function App() {


  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/user">Kullanıcı</NavLink>
        </li>
      </ul>
      <Router />
    </>
  )
}

export default App
