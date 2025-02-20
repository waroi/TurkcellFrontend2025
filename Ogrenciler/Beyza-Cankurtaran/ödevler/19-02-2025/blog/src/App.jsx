import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar.jsx";
import Banner from "./components/banner";
import Blog from"./components/blog";
import Footer from "./components/footer";

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Blog/>
      <Footer/>
      
    </>
  )
}

export default App
