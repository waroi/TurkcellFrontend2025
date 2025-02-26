import { useEffect, useState } from "react";
import "./App.css";
import { getGenres, getSearchMovie, getSearchActor } from "./api/useFetch";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import MovieDetail from "./components/MovieDetail";
import ActorCard from "./components/ActorCard";
import MovieCard from "./components/MovieCard";

const HomeContainer = styled.section`
  width: 100%;
  background-color: #161616;
  min-height: 100vh;
`;

const CardImg = styled.img`
  height: 270px;
  object-fit: cover;
`;

const MovieResultTypography = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 17px;
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
  const [selectedOption, setSelectedOption] = useState("Filmler");
  const [actor, setActor] = useState([]);

  useEffect(() => {
    getGenres().then((data) => setGenres(data));
  }, []);

  const handleSearch = async () => {
    if (selectedOption === "Filmler") {
      const data = await getSearchMovie(moviename);

      setMovies(data);
    } else {
      const data = await getSearchActor(moviename);

      setActor(data);
    }
  };

  const getGenreName = (genreIds) => {
    const genre = genres.find((g) => g.id === genreIds[0]);
    return genre ? genre.name : "Bilinmeyen";
  };

  return (
    <>
      <HomeContainer className="w-100">
        <Navbar
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          setMoviename={setMoviename}
          handleSearch={handleSearch}
        />

        <div className="custom-padding z-2">
          <div className="container">
            <div className="row justify-content-center">
              {movies?.total_results ? (
                <div className="row text-light p-3">
                  <MovieResultTypography className="container">
                    {movies?.total_results} sonuç bulundu...
                  </MovieResultTypography>
                </div>
              ) : null}
              {selectedOption === "Filmler"
                ? movies?.results?.map((movie) => (
                    <MovieCard
                      genre={getGenreName(movie.genre_ids)}
                      key={movie.id}
                      movie={movie}
                    />
                  ))
                : actor?.results?.map((actor) => (
                    <ActorCard key={actor.id} actor={actor} />
                  ))}
            </div>
          </div>
        </div>
      </HomeContainer>
    </>
  );
}

export default App;
