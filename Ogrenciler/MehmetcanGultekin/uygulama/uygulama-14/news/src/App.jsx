import React from 'react'
import { NavLink } from "react-router"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'
import Router from './router/Router'
import {getNewsCategory, getNews} from './api/getNews'
import HomeNewsView from './views/HomeNewsView'

function App() {
  console.log(getNewsCategory("sport"))
  console.log(getNewsCategory("economy"))
  // console.log(getNews())
  
  return (
    <>
      <Navbar/>
      {/* <HomeNewsView/> */}
      {/* <NavLink to="/haberler/">Haberler</NavLink> */}

        
      
      <Router/>
      <Footer/>
    </>
  )
}

export default App
