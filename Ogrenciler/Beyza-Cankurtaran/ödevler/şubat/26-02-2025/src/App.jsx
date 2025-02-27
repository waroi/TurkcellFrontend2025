import { NavLink } from "react-router";
import Router from "./routes/Router";
import './scss/main.scss';
import Header from "./components/Header/header";
import Banner from "./components/Banner/Banner";



function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Router />
    </>
  )
}

export default App
