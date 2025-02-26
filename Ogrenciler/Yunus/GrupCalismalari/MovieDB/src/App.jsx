import { act, useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import NavBar from "./components/NavBar";

function App() {
  const [movieName, setMovieName] = useState("superman");
  const [pages, setPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

  const headers = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTIxMTY4YjQxMGZjOTYwY2M3Yjk3MWJhYWEyY2Q1ZSIsIm5iZiI6MTcyNDA1MjA4Mi40ODYsInN1YiI6IjY2YzJmMjcyNjNkMjg4NzA5ZGEyOGY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gfcDK95-SIr-vwG6UT-yafyB7-mBOvzF5rT_EbtgKak",
  };

  const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=tr-TR&page=${pages}`;
  const options = {
    method: "GET",
    headers,
  };

  useEffect(() => {
    getMovies();
  }, [pages]);

  const getMovies = async () => {
    setActors(null);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const moviesWithActors = await Promise.all(
        data.results.map(async (movie) => {
          const actors = await getActors(movie.id);
          return { ...movie, actors };
        })
      );
      setMovies(moviesWithActors);
    } catch (err) {
      console.error(err);
    }
  };

  const getActors = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=tr-TR`;
    const options = {
      method: "GET",
      headers,
    };
    const response = await fetch(url, options);
    const data = await response.json();
    data.cast.sort((a, b) => b.popularity - a.popularity);
    const newData = data.cast.slice(0, 5);

    return newData;
  };

  const getActor = async () => {
    setMovies(null);
    const actorUrl = `https://api.themoviedb.org/3/search/person?query=${movieName}&include_adult=false&language=en-US&page=1`;
    const actorOptions = {
      method: "GET",
      headers,
    };
    const response = await fetch(actorUrl, actorOptions);
    const data = await response.json();
    const moviesWithActors = await Promise.all(
      data.results.map(async (movie) => {
        const movies = await getMoviesByPersonId(movie.id);
        return { ...movie, movies };
      })
    );
    setActors(moviesWithActors);
  };

  const getMoviesByPersonId = async (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?language=tr-TR`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTIxMTY4YjQxMGZjOTYwY2M3Yjk3MWJhYWEyY2Q1ZSIsIm5iZiI6MTcyNDA1MjA4Mi40ODYsInN1YiI6IjY2YzJmMjcyNjNkMjg4NzA5ZGEyOGY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gfcDK95-SIr-vwG6UT-yafyB7-mBOvzF5rT_EbtgKak",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data.cast;
  };

  return (
    <>
      <div className="container-fluid p-3 bg-dark">
        <NavBar
          movieName={movieName}
          setMovieName={setMovieName}
          getMovies={getMovies}
          getActor={getActor}
        ></NavBar>
        {/* <div className="form-floating mb-3">
          <input
            type="email"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            className="form-control"
            id="movieName"
            placeholder="Film İsmi"
          />
          <label htmlFor="movieName">Email address</label>
          <button className="btn btn-primary" onClick={getMovies}>
            Ara
          </button>
          <button className="btn btn-primary ms-2" onClick={getActor}>
            Oyuncu Ara
          </button>
        </div> */}

        <div className="row">
          {/* // https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png İMAGE PATH */}
          {movies &&
            movies.map((movie, index) => <Movie movie={movie} key={index} />)}
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setPages(pages - 1)}
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setPages(pages + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="row">
          {actors &&
            actors.map((actor, index) => (
              <>
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
                              <>
                                {/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
                                  </div>
                                  <div className="carousel-item">
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
                                  </div>
                                  <div className="carousel-item">
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
                                  </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                              </div> */}
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
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
