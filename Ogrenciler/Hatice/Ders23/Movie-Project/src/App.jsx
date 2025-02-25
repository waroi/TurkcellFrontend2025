import "./App.css";
import { fetchActors, fetchMovies } from "./services/services";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

  const getData = async () => {
    const movieData = await fetchMovies();
    const actorData = await fetchActors();

    if (movieData) setMovies(movieData.results);
    if (actorData) setActors(actorData.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return(
   <>
   <div>
      <h1>Popüler Filmler</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <h1>Popüler Oyuncular</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  </>);
}

export default App;
