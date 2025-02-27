import { NavLink } from "react-router";
import "./App.css";
import Router from "./router/Router";
import CustomHeader from "./components/CustomHeader";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <>
      <CustomHeader />
      <Router>
        <NavLink to="/">Home</NavLink>
      </Router>
      <CustomFooter />
    </>
  );
}

export default App;
