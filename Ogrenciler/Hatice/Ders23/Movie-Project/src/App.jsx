import "./App.css";
import {
  fetchActors,
  fetchMovies,
  searchMovies,
  searchActors,
} from "./services/services";
import { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import Footer from "./components/Footer";
import SortByMovie from "./components/SortByMovie";
import SortByActors from "./components/SortByActors";

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async () => {
    const movieData = await fetchMovies();
    const actorData = await fetchActors();

    if (movieData) setMovies(movieData.results);
    if (actorData) setActors(actorData.results);
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
      <NavBar />
      <h1 className="card-title text-center mt-5 mb-5" id="home">Film ve Oyuncu Listeleri</h1>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <Container>
        <h2 className="my-4 text-center card-title fw-bold" id="filmler">Film Listesi</h2>
        <SortByMovie movies={movies} />
        <h2 className="mt-5 mb-3 text-center card-title fw-bold" id="oyuncular">Popüler Kişiler</h2>
        <SortByActors actors= {actors}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
