import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import BlogPosts from './components/BlogPosts'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <BlogPosts searchTerm={searchTerm} />
      <Footer />
    </>
  )
}

export default App
