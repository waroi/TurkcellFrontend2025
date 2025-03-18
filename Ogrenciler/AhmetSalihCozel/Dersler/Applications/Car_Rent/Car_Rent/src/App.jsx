"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Footer from './Templates/Footer'
import Header from './Templates/Header'
import { red } from '@mui/material/colors'
import Router from './Routes/Router'
import './App.css'
import { BrowserRouter } from 'react-router'
import useUserStore from './Store/userStore'
import { useEffect } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    }
  }
})

function App() {
  const getCars = useUserStore((state)=>state.getCars)
  useEffect(() => {
    getCars();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
