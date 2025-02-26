import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import ActorCard from "./components/ActorCard";

function App() {
  const [movies, setMovie] = useState([]);
  const [actors, setActor] = useState([]);

  return (
    <>
      <h1>Movie/Actor Search</h1>
      <Search setMovie={setMovie} setActor={setActor} />
      <MovieCard movies={movies} />
      <ActorCard actors={actors} />
    </>
  );
}

export default App;
