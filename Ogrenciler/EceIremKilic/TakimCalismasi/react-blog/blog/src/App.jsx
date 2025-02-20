import { useState } from 'react'
import CustomNavbar from './components/CustomNavbar'
import Article from './components/Article'
import MainArticle from './components/MainArticle'
import Footer from './components/Footer'
import OperationBar from './components/OperationBar'
import RequestModel from './core/RequestModel'

function App() {
  

  return (
    <>
      <CustomNavbar/>
      <MainArticle/>
      <OperationBar/>
      <RequestModel/>
      <Article/>
      <Footer/>
    </>
  )
}

export default App
