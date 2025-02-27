import { NavLink } from "react-router";
import './scss/main.scss';
import Header from "./components/Header/header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/about";
import BestSeller from "./components/BestSeller/bestSeller";
import Product from "./components/Product/product";



function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <BestSeller/>
      <Product/>
    </>
  )
}

export default App
