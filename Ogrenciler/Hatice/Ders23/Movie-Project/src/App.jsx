// App.jsx
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import FilmGrid from './components/FilmGrid';
import { getPopularMovies, searchMovies, getMovieDetails } from './services/services';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const data = await getPopularMovies();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;
    try {
      const data = await searchMovies(searchTerm);
      setMovies(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleDetailsClick = async (movieId) => {
    try {
      const data = await getMovieDetails(movieId);
      alert(`Film: ${data.title}\n\nÖzet: ${data.overview}`);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4 text-center">TMDB Film Listesi</h1>
      <Form onSubmit={handleSearch} className="mb-4">
        <Form.Control
          type="text"
          placeholder="Film Ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" className="mt-2" variant="primary">
          Ara
        </Button>
      </Form>
      <FilmGrid movies={movies} onDetailsClick={handleDetailsClick} />
    </Container>
  );
};

export default App;
