import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import NavBar from "./components/NavBar";
import { searchActors, searchMovies } from "./services/movieService";

function App() {
  const [movieName, setMovieName] = useState("superman");
  const [pages, setPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovies();
  }, [pages]);

  const getMovies = async () => {
    setActors(null);
    setIsLoading(true);
    try {
      const moviesData = await searchMovies(movieName, pages);
      setMovies(moviesData);
    } catch (err) {
      console.error("Film çekerken bi hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  const getActor = async () => {
    setMovies(null);
    setIsLoading(true);
    try {
      const actorsData = await searchActors(movieName);
      setActors(actorsData);
    } catch (err) {
      console.error("Aktör çekerken bir hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid p-3 bg-dark">
        <NavBar
          movieName={movieName}
          setMovieName={setMovieName}
          getMovies={getMovies}
          getActor={getActor}
        />
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="row">
              {movies &&
                movies.map((movie, index) => <Movie movie={movie} key={index} />)}
              {movies && movies.length > 0 && (
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className={`page-item ${pages === 1 ? 'disabled' : ''}`}>
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => pages > 1 && setPages(pages - 1)}
                      >
                        Geri
                      </a>
                    </li>
                    <li className="page-item">
                      <span className="page-link">Sayfa {pages}</span>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => setPages(pages + 1)}
                      >
                        İleri
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
            <div className="row">
              {actors &&
                actors.map((actor, index) => (
                  <div className="col-lg-12" key={index}>
                    <div className="card mb-3 p-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={
                              actor.profile_path
                                ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                                : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                            }
                            className="img-fluid rounded-start"
                            alt={actor.original_name}
                          />
                          <h5 className="card-title">{actor.original_name}</h5>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <div className="row">
                              {actor.movies.map((movie) => (
                                <div className="col-lg-4 mb-3" key={movie.id}>
                                  <div className="card h-100">
                                    <img
                                      height={450}
                                      src={
                                        movie.poster_path
                                          ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                          : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                                      }
                                      className="card-img-top"
                                      alt={movie.original_title}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;