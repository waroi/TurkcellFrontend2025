import "./App.css";
import {
  fetchActors,
  fetchMovies,
  fetchSeries,
  searchMovies,
  searchActors,
} from "./services/services";
import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Navbar from "./components/Navbar";
import SortBy from "./components/SortBy";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonGrid from "./components/PersonGrid";
import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async () => {
    const movieData = await fetchMovies();
    const actorData = await fetchActors();
    const serieData = await fetchSeries();

    if (movieData) setMovies(movieData.results);
    if (actorData) setActors(actorData.results);
    if (serieData) setSeries(serieData.results);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;

    try {
      const movieData = await searchMovies(searchTerm);
      const actorData = await searchActors(searchTerm);
      setMovies(movieData.results);
      setActors(actorData.results);
    } catch (error) {
      console.error("Arama sırasında hata oluştu:", error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="card-title text-center mt-5 mb-5" id="home">Film ve Oyuncu Listeleri</h1>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <Container>
        <h2 className="my-4 text-center card-title" id="filmler">Film Listesi</h2>
        <SortBy movies={movies} />
        <h2 className="mt-5 mb-3 text-center card-title" id="oyuncular">Popüler Kişiler</h2>
        <PersonGrid persons={actors} />
      </Container>
    </>
  );
}

export default App;
