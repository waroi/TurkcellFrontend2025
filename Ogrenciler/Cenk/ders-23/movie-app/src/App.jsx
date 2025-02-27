import { useState, useEffect } from "react";
import MovieService from "./services/MovieService";
import MovieCard from "./components/MovieCard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/layout/Footer";
import { Col, Container, Row, Pagination } from "react-bootstrap";
import "./App.scss";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [searchValue, setSearchValue] = useState("a");

  const fetchMovies = async (searchValue, page) => {
    const data = await MovieService.getAllMovies(searchValue, page);
    setMovies(data.results);
    setTotalPages(Math.min(data.total_pages, 10));
  };

  useEffect(() => {
    fetchMovies(searchValue, currentPage);
  }, [searchValue, currentPage]);

  const handleSearch = (searchValue) => {
    const query = searchValue.trim() === "" ? "a" : searchValue;
    setSearchValue(query);
    setCurrentPage(1)
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container>
        <h1 className="text-center my-4">Trend Filmler</h1>
        <Row className="g-4">
          {movies.length === 0 ? (
            <Col>
              <h2 className="text-center">Kriterlerinize uygun film bulunamadı...</h2>
            </Col>
          ) : (
            movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Col>
          ))
)}
        </Row>
      </Container>
      <Pagination className="justify-content-center m-5">
        { movies.length === 0 && (
          <Pagination.Item disabled>0</Pagination.Item>
        )}
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
      <Footer/>
    </>
  );
}

export default App;
