import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovie] = useState([]);
  const [actor, setActor] = useState([]);

  return (
    <>
      <h1>Movie</h1>
      <Search setMovie={setMovie} setActor={setActor} />
      <MovieCard movies={movies} />
    </>
  );
}

export default App;
