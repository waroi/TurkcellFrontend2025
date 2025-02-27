import Router from "./routes/Router";
import "./App.css";
import { NavLink } from "react-router";
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
        <li>
          <NavLink to="/parameter/:101">Parametre</NavLink>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
