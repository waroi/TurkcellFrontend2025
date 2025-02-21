import { useEffect, useState } from 'react'
import { getOneUser } from './api/useFetch'
import './App.css'


function App() {
  useEffect(() => {
    getOneUser('mehmetcang')
    
  },[]
  )
  
  return (
    <>
      
    </>
  )
}

export default App
