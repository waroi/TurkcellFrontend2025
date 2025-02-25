import { useEffect, useState } from "react";
import {
  getAllFilms,
  getSearchedFilm,
  getSearchedPersonFilms,
} from "./api/getFilm";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./components/MovieCard/MovieCard";
import SearchMovie from "./components/SearchBar/SearchMovie";
import SearchPerson from "./components/SearchBar/SearchPerson";

function App() {
  const [movies, setMovies] = useState();
  const [movieName, setMovieName] = useState("");
  const [moviePerson, setMoviePerson] = useState("");

  useEffect(() => {
    getAllFilms()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSearch = () => {
    getSearchedFilm(movieName)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleSearchPerson = () => {
    getSearchedPersonFilms(moviePerson)
      .then((data) => {
        setMovies("");
        setMovies(data.results[0].known_for);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <h1>HD Movie Hell</h1>
      <Row className="my-3">
        <Col md={6}>
          <SearchMovie
            movieName={movieName}
            onSearch={handleSearch}
            setMovieName={setMovieName}
          ></SearchMovie>
        </Col>
        <Col md={6}>
          <SearchPerson
            personName={moviePerson}
            onSearch={handleSearchPerson}
            setPersonName={setMoviePerson}
          ></SearchPerson>
        </Col>
      </Row>
      <Row className="g-4">
        {movies &&
          movies.map((movie) => {
            return (
              <Col key={movie.id + "col"} xs={2} md={3}>
                <MovieCard key={movie.id} movie={movie}></MovieCard>
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default App;
