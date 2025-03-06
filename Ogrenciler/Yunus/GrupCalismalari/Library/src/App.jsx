import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Router from './routes/Router'
import './App.css'
import { useEffect } from 'react'
import { Auth } from './api/auth'
function App() {

  useEffect(() => {
    Auth.authOnStateChanged()
  }, [])


  return (
    <>
      <Header />
      <main className='my-5'>
        <Router />
      </main>
      <Footer />
    </>
  )
}

export default App