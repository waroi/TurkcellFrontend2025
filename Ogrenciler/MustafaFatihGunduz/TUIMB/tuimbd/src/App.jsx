import { useEffect, useState } from "react";
import { getMovies, searchMovieActor } from "./components/model/RequestModel";
import "./App.css";
import FilmModal from "./components/FilmModal";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState(null);

  const openModal = (movie) => {
    setSelectedMovies(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovies(null);
  };

  const getMovie = async () => {
    const movie = await getMovies();
    setMovies(movie);
  };

  const getSearch = async () => {
    const movie = await searchMovieActor(search);

    console.log("movie:" + movie?.results?.media_type);
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

            movie.media_type === "person" ? <div className="col-lg-4">
              <div className="card" key={movie.id}>
                <div className="card-body">
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${movie.profile_path}`}
                    alt={movie.name}
                  />
                  <h2>{movie.name}</h2>
                  <p>{movie.known_for_department
                  }</p>
                  <button onClick={() => openModal(movie)}> Fimleri</button>
                </div>
              </div>
            </div> : <div className="col-lg-4">
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

      <FilmModal
        movies={selectedMovies}
        closeModal={closeModal}
        isOpen={isModalOpen}
      />
    </>
  );
}

export default App;


