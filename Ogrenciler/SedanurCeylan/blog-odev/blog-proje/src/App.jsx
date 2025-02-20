import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Main/blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Blog />
    </div>
  )
}

export default App
