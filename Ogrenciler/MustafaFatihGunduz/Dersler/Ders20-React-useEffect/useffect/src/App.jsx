import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [sayac, setSayac] = useState(0)
  return (
    useEffect(() => {
      console.log('Mount aşamasında useEffect çalıştı')
    }, []),
    useEffect(() => {
      console.log('Update aşamasında useEffect çalıştı')
    }, [sayac]),
    useEffect(() => {
      return () => {
        console.log('Unmount aşamasında useEffect çalıştı')
      }
    },[]),
    <>
      <h1 onClick={() => setSayac(sayac + 1)}>Use Effect {sayac} kere çalıştı</h1>
    </>
  )
}

export default App
