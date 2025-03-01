import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' ;
import Breadcrumb from './components/Breadcrumb'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from '../src/routes/Router';


function App() {
  return (
    <>
    <Navbar/>
    <Breadcrumb/>
    <Router/>
    </>
  )
}

export default App
