import { useEffect, useState } from "react";
import {
  getAllFilms,
  getSearchedFilm,
  getSearchedPersonFilms,
} from "./api/getFilm";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import MovieCard from "./components/MovieCard/MovieCard";
import SearchMovie from "./components/SearchBar/SearchMovie";
import SearchPerson from "./components/SearchBar/SearchPerson";

function App() {
  const [movies, setMovies] = useState();
  const [movieName, setMovieName] = useState("");
  const [moviePerson, setMoviePerson] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    getAllFilms(page)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSearch = () => {
    setPage(1);
    getSearchedFilm(movieName, 1)
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
  const nextPage = () => {
    setPage(page + 1);
    if (movieName != "") {
      getSearchedFilm(movieName, page + 1)
        .then((data) => {
          setMovies(data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      getAllFilms(page + 1)
        .then((data) => {
          setMovies(data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const prevPage = () => {
    setPage(page - 1);
    if (movieName != "") {
      getSearchedFilm(movieName, page - 1)
        .then((data) => {
          setMovies(data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      getAllFilms(page - 1)
        .then((data) => {
          setMovies(data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <>
      <h1>HD Movie Hell</h1>
      <Row className="my-3">
        <Col md={6} className="mb-3">
          <SearchMovie
            movieName={movieName}
            onSearch={handleSearch}
            setMovieName={setMovieName}
          ></SearchMovie>
        </Col>
        <Col md={6} className="mb-3">
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
              <Col key={movie.id + "col"} md={6} lg={4} xl={3}>
                <MovieCard key={movie.id} movie={movie}></MovieCard>
              </Col>
            );
          })}
      </Row>
      <Row className="my-3 ">
        <Col className="d-flex justify-content-end">
          <Button
            variant={"primary"}
            disabled={page <= 1 ? true : false}
            onClick={prevPage}
          >
            Prev
          </Button>
        </Col>
        <Col className="d-flex justify-content-start">
          <Button variant={"primary"} onClick={nextPage}>
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default App;
