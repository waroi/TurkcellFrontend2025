import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeatherApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <WeatherApp/>
  </StrictMode>,

  //strict mode birden fazla app cağırmaya yarar diger ismi React.Fragment
)
