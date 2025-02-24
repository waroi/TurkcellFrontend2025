import { useState } from "react";
import { getAllFilms } from "./api/getFilm";
import "./App.css";
import { get } from "immutable";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  const [movies, setMovies] = useState();
  getAllFilms()
    .then((data) => {
      setMovies(data.results);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <>
      {movies &&
        movies.map((movie) => {
          return <MovieCard movie={movie}></MovieCard>;
        })}
    </>
  );
}

export default App;
