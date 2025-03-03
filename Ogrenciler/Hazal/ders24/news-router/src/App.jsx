import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Router';

function App() {
  return (
    <>
    <Navbar/>
    <Router/>
    <Footer/>
    </>
  )
}

export default App;
