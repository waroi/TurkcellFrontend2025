import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ActorCard from './components/ActorCard';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
function App() {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [personList, setPersonList] = useState([]);


  return (
    <>
      <h1>Movie</h1>
      <Banner>
        <SearchBar
        movieList={movieList}
        setMovieList={setMovieList}
        personList={personList}
        setPersonList={setPersonList}
      />
      </Banner>



      <ActorCard />
      <MovieCard movieList={movieList} personList={personList} />
    </>
  )
}

export default App;  