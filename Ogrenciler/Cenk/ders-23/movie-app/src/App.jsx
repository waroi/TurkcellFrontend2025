import { useState, useEffect, lazy } from "react";
import MovieService from "./services/MovieService";
import MovieCard from "./components/MovieCard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Pagination } from "react-bootstrap";
import "./App.scss";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const fetchMovies = async (searchValue) => {
    const data = await MovieService.getAllMovies(searchValue, currentPage);
    console.log(data);
    setMovies(data.results);
    if (data.total_pages < 10) {
      setTotalPages(data.total_pages);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const handleSearch = (searchValue) => {
    console.log(searchValue);
    fetchMovies(searchValue);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
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
      <Pagination className="justify-content-center m-5">
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
}

export default App;
