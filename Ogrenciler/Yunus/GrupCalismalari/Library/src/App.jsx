import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Router from './routes/Router'
import './App.css'
import { useEffect } from 'react'
import { Auth } from './api/auth'
import { FireStore } from './api/fireStore'

function App() {

  useEffect(() => {
    // Auth.signUp('1212321assa123212@hazal.com', 'selam2313')
    // FireStore.addUser()
    // FireStore.addBook('hazal', 'hazal.com', 'hazalın dünyası', 'hazal', '1886', 'dram', 'hazalın evi', 'hazalınidsi')

    // FireStore.getBooks()

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