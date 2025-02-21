import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Main/blog'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='App'>
      <Header />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
