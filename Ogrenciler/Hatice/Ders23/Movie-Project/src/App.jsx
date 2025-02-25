import "./App.css";
import { fetchActors, fetchMovies, fetchSeries } from "./services/services";
import { useEffect, useState } from "react";
import {Container, Form, Button} from "react-bootstrap";
import FilmGrid from "./components/FilmGrid";
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


  return (
    <Container>
      <h1 className="my-4 text-center">TMDB Film Listesi</h1>
      {/* <Form onSubmit={handleSearch} className="mb-4">
        <Form.Control
          type="text"
          placeholder="Film Ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" className="mt-2" variant="primary">
          Ara
        </Button>
      </Form> */}
      <FilmGrid movies={movies} />
    </Container>
  );
}

export default App;
