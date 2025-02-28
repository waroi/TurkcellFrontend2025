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

  const getClear = async () => {
    getMovie();
    setSearch("");
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1 className="baslik">TUIMDB</h1>
      <div className="search d-flex justify-content-center align-items-center gap-2 my-5">
        <input className="rounded-5"
          type="search"
          name="search"
          id="search"
          placeholder="Film veya Oyuncu Ara"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="ara rounded-5" onClick={getSearch}>Ara</button>
        <button className="temizle rounded-5" onClick={getClear}>Temizle</button>

      </div>
      <div className="container">
        <div className="row gy-4 d-flex justify-content-center flex-wrap">
          {movies.results?.map((movie) => (
            movie.media_type === "person" ? <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100" key={movie.id}>
                <div className="card-body h-100">
                  <img className="my-4"
                    src={movie.profile_path
                      ? `https://image.tmdb.org/t/p/w185/${movie.profile_path}`
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg "}
                    alt={movie.title}
                  />
                  <h2>{movie.name}</h2>
                  <p>{movie.known_for_department
                  }</p>
                  <button className="filmleri rounded-5" onClick={() => openModal(movie)}> Filmleri</button>
                </div>
              </div>
            </div> : <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100" key={movie.id}>
                <div className="card-body h-100">
                  <img className="my-4"
                    src={movie.poster_path
                      ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg "}
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


