import { useEffect, useState } from "react";
import "./App.css";
import { getGenres, getSearchMovie } from "./api/useFetch";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import MovieDetail from "./components/MovieDetail";

const HomeContainer = styled.section`
  width: 100%;
  background-color: #161616;
  min-height: 100vh;
`;

const CardImg = styled.img`
  height: 270px;
  object-fit: cover;
`;

const CardTypography = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  padding: 0;
  margin-bottom: 0;
`;

const CardTitle = styled.h5`
  color: rgba(255, 255, 255, 0.8);
  font-size: 17px;
`;

const DetailButton = styled.button`
  background-color: #dbdbdb;
  color: black;
  font-size: 13px;
  border: none;
  &:hover {
    background-color: #bebebe;
    color: black;
  }
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [moviename, setMoviename] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((data) => setGenres(data));
  }, []);

  const handleSearch = async () => {
    const data = await getSearchMovie(moviename);
    setMovies(data);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const getGenreName = (genreIds) => {
    const genre = genres.find((g) => g.id === genreIds[0]); 
    return genre ? genre.name : "Bilinmeyen"; 
  };
  

  return (
    <>
      <HomeContainer className="w-100">
        <Navbar setMoviename={setMoviename} handleSearch={handleSearch} />
        <div className="w-100 text-light">
          <CardTypography>{movies?.total_results}</CardTypography>
        </div>

        <div className="w-100 custom-padding z-2">
          <div className="container-xxl">
            <div className="row justify-content-center">
              {movies &&
                movies.results &&
                movies.results.map((movie) => (
                  <div key={movie.id} className="col-md-5">
                    <div className="card mb-3 p-0 card-bg text-light">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <CardImg
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            className="img-fluid rounded-start"
                            alt="film movie banner"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body d-flex flex-column justify-content-between h-100">
                            <CardTitle className="card-title">
                              {movie.title}
                            </CardTitle>
                            <CardTypography className="card-text">
                              {movie.overview.split(" ").slice(0, 40).join(" ")}
                              ...
                            </CardTypography>
                            <CardTypography className="d-flex align-items-center gap-1">
                              <i
                                className="fa-solid fa-star"
                                style={{ color: "#FFD43B" }}
                              ></i>
                              <span>{movie.vote_average}</span>
                              <span>({movie.vote_count})</span>
                            </CardTypography>
                            <CardTypography className="d-flex align-items-center gap-2">
                              <i className="fa-solid fa-calendar-days"></i>
                              <span> {formatDate(movie.release_date)}</span>
                            </CardTypography>
                            <DetailButton
                              type="button"
                              className="btn btn-primary w-50"
                              data-bs-toggle="modal" data-bs-target={`#userModal-${movie.id}`}
                            >
                              Detayları İncele
                            </DetailButton>
                            <MovieDetail
                            movie={movie}
                            modalId={`userModal-${movie.id}`}
                            genre={getGenreName(movie.genre_ids)}
                            />
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </HomeContainer>
    </>
  );
}

export default App;
