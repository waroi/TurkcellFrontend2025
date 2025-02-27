import { NavLink } from "react-router";
import "./App.css";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Router>
        <NavLink to="/">Home</NavLink>
      </Router>
    </>
  );
}

export default App;
