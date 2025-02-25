import { useEffect, useState } from "react";
import { getAllFilms, getSearchedFilm } from "./api/getFilm";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./components/MovieCard/MovieCard";
import SearchMovie from "./components/SearchBar/SearchMovie";

function App() {
  const [movies, setMovies] = useState();
  const [movieName, setMovieName] = useState("");

  useEffect(() =>{
    getAllFilms()
    .then((data) => {
      setMovies(data.results);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  const handleSearch = () => {
    getSearchedFilm(movieName)
    .then((data) => {
      setMovies(data.results);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <>
    <SearchMovie movieName = {movieName} onSearch={handleSearch}
            setMovieName={setMovieName}></SearchMovie>
    <Row className="g-4">
    {movies &&
        movies.map((movie) => {
          return (<Col key = {movie.id + "col"} md={4}>
            <MovieCard  key = {movie.id} movie={movie}></MovieCard>

          </Col>);
        })}
    </Row>
      
    </>
  );
}

export default App;
