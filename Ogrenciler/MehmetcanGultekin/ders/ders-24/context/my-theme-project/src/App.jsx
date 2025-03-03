import {  useTheme } from './context/ThemeContext'
import './App.css'
import Button from './components/Button'

function App() {
const {theme} = useTheme()
  return (
    <>
      <div className={`app ${theme}`}>
        <h1>context</h1>
        <Button />
      </div>
     
    </>
  )
}

export default App
