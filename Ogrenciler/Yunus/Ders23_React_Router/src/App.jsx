import { NavLink } from 'react-router'
import './App.css'
import Router from './routes/Router'

function App() {

  return (
    <>
      <ul>
        <li>
          <NavLink to='/'>Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/users">Kullanıcılar</NavLink>
        </li>
        <li>
          <NavLink to={`/parametre/${Math.random() * 130430324}`}>Parametre</NavLink>
        </li>
        <li>
          <NavLink to="/comments">Yorumlar</NavLink>
        </li>
        <li>
          <NavLink to="/news">Haberler</NavLink>
        </li>
        <li>
          <NavLink to="/news/sport">Spor Haberleri</NavLink>
        </li>
        <li>
          <NavLink to="/news/economy">Ekonomi Haberleri</NavLink>
        </li>
      </ul>
      <Router />
    </>
  )
}

export default App
