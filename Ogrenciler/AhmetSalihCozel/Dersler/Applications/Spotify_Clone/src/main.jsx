import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import themeOptions from '../themeOptions.js'



const theme = createTheme(themeOptions())
console.log(theme)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
      </ThemeProvider >
  </StrictMode>
)
