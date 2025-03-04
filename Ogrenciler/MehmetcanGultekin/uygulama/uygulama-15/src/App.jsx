import { useState } from 'react'
import './App.css'
import BookCard from './components/BookCard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
     <BookCard/>
     <Footer/>      
    </>
  )
}

export default App
