import { useEffect, useState } from "react";
import { getMovies, searchMovieActor } from "./components/model/RequestModel";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovie = async () => {
    const movie = await getMovies();
    setMovies(movie);
  };

  const getSearch = async () => {
    const movie = await searchMovieActor(search);
    setMovies(movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1>TUIMBD</h1>
      <input
        type="search"
        name="search"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={getSearch}>Search</button>
      <div className="container">
        <div className="row">
          {movies.results?.map((movie) => (
            <div className="col-lg-4">
              <div className="card" key={movie.id}>
                <div className="card-body">
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h2>{movie.title}</h2>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
