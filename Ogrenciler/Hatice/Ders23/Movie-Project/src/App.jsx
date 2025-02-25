import "./App.css";
import { fetchActors, fetchMovies, fetchSeries, searchMovies } from "./services/services";
import { useEffect, useState } from "react";
import {Container, Form, Button} from "react-bootstrap";
import FilmGrid from "./components/FilmGrid";
import Navbar from "./components/Navbar";
import FilterSearch from "./components/FilterSearch";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [series, setSeries] = useState([])

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

  const handleSearch = (query) => {
    if (!query) {
        setMovies([]); // Boş aramada sonuçları temizle
    } else {
        searchMovies(query).then((data) => {
            if (data) setMovies(data.results);
        });
    }
};
  
  return (
    <>
    <Navbar onSearch={handleSearch} />
    <Container>
      <h1 className="my-4 text-center">TMDB Film Listesi</h1>
      <FilterSearch movies={movies}/>
      <FilmGrid movies={movies} />
    </Container>
    </>
  );
}

export default App;
