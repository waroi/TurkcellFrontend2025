import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import deneme from './components/deneme'
function App() {
  return (
    <>
     <h1>React</h1>
      <div className="card">Merhaba React
      </div>
     <deneme isim="Beyza" yas={23}/>
     <deneme isim="xccc" yas={20}/>
    </>
  )
}

export default App
