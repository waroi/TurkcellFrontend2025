import Router from "./routers/Router";
import { NavLink } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/user">Kullanici</NavLink>
        </li>
        <li>
          <NavLink to="/parametre/101">Parametre</NavLink>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
