import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import ActorCard from "./components/ActorCard";

function App() {
  const [movies, setMovie] = useState([]);
  const [actors, setActor] = useState([]);

  return (
    <div>
      <h1>🎬 Movie Finder</h1>
      <Search setMovie={setMovie} setActor={setActor} />
      <MovieCard movies={movies} />
      <ActorCard actors={actors} />
    </div>
  );
}

export default App;
