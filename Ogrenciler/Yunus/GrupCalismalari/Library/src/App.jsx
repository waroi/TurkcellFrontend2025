import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Router from './routes/Router'
import './App.css'

function App() {
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