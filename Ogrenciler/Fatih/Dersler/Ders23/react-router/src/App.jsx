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
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="parameter/101">Parametre</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/">Haberler</NavLink>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
