import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getSearchMovie } from './api/useFetch'
import Usersearch from './components/Usersearch'


function App() {
  const [movies, setMovies] = useState(null)
  const [moviename, setMoviename] =useState("")
  const handleSearch = async (moviename)=>{
  const data = await getSearchMovie (moviename)  
  setMovies(data)


  }

  return (
    <>
     <Usersearch/>
      





    </>
  )
}

export default App
