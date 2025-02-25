import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getSearchMovie } from './api/useFetch'
import Navbar from './components/Navbar'
import { Button } from 'bootstrap'


function App() {
  const [movies, setMovies] = useState([])
  const [moviename, setMoviename] = useState("")
  const handleSearch = async () => {
    const data = await getSearchMovie(moviename)
    setMovies(data.results)
    console.log(data)




  }

  return (
    <>


      <Navbar
        setMoviename={
          setMoviename
        }

        handleSearch={
          handleSearch
        }



      />

<div className="mt-5" >


{
    movies?.map((movie)=>(
      <div key={movie.id} className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
        <p className="card-text"><small className="text-body-secondary">Release Date</small></p>
        <button type="button" className="btn btn-primary">Read More</button>

      </div>
    </div>
  </div>
</div>

    )) 
      }



</div>

</>
  )
}

export default App
