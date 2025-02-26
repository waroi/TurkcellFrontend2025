import Router from './routes/Router';
import { NavLink } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <ul>
        {/*<li><a href=''></a></li>  bu şekilde de kullanılıyor*/}
        <li><NavLink to="/">Anasayfa</NavLink></li>
        <li><NavLink to="/user">Kullanıcı</NavLink></li>
        <li><NavLink to="/parametre/101">Parametre</NavLink></li>
      </ul>
      <Router/>
    </>
  );
}

export default App;
