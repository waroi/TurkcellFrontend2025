import { useState } from 'react'
import CustomNavbar from './components/CustomNavbar'
import Article from './components/Article'
import MainArticle from './components/MainArticle'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <CustomNavbar/>
      <MainArticle/>
      <Article/>
      <Footer/>
    </>
  )
}

export default App
