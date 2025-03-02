import React from 'react'
import { NavLink } from "react-router"
import './App.css'
import Router from './router/Router'

function App() {
  
  
  return (
    <>
      <NavLink to="/Navbar">Navbar</NavLink>
      <NavLink to="/haberler/">Haberler</NavLink>
        
      
      <Router/>
      <NavLink to="/Footer">Footer</NavLink>
    </>
  )
}

export default App
