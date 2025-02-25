import { useState, useEffect } from "react";
import MovieService from "./services/MovieService";
import MovieCard from "./components/MovieCard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService.getAllMovies()
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((error) => console.error("API Hatası:", error));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1 className="text-center my-4">Trend Filmler</h1>
        <Row className="g-4"> 
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;