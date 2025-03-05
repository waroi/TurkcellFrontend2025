import { useState } from 'react'
import Button from './components/Button' 
import { useTheme } from './context/ThemeContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const {theme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Context Uygulama</h1>
      <Button>Tikla</Button>
    </div>
  )
}

export default App
