import { NavLink } from "react-router";
import Router from "./routes/Router";
import "./App.css";

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
          <NavLink to="/haberler">Haberler</NavLink>
        </li>
      </ul>
      <Router />
    </>
  );
}

export default App;
