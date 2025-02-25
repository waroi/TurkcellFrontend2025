import { useState } from 'react';
import './App.css';
import Appbar from './components/Appbar';
import MovieForm from './components/MovieForm';
import PersonForm from './components/PersonForm';
import MovieCard from './components/MovieCard';
import PersonCard from './components/PersonCard';
import MoviePagination from './components/MoviePagination';
import Header from './components/Header';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [personData, setPersonData] = useState([]);
  const [movieQuery, setMovieQuery] = useState('');
  const [personQuery, setPersonQuery] = useState('');
  const [currentMoviePage, setCurrentMoviePage] = useState(1);
  const [moviePages, setMoviePages] = useState(1);
  const [currentPersonPage, setCurrentPersonPage] = useState(1);
  const [personPages, setPersonPages] = useState(1);

  const searchPersonURL = 'https://api.themoviedb.org/3/search/person';
  const searchMovieURL = 'https://api.themoviedb.org/3/search/movie';
  const imgURL = 'https://image.tmdb.org/t/p/original';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzFiNjQyYjY3YmFiY2M4NjNkNGI0MjgxNDc3YWMzZSIsIm5iZiI6MTc0MDQxNzQyNC42MzkwMDAyLCJzdWIiOiI2N2JjYTk5MDIzZmUxMTdlZTZhNDc2MDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wa65ycPLRl8D9je5Bmzb6029f-39QKLFU4h8RgcgP78',
    },
  };

  const fetchMovieData = async (page = 1) => {
    const response = await fetch(
      `${searchMovieURL}?query=${movieQuery}&language=tr-TR&page=${page}`,
      options
    );
    const data = await response.json();
    setMovieData(data.results || []);
    setMoviePages(data.total_pages || 1);
  };

  const fetchPersonData = async (page = 1) => {
    const response = await fetch(
      `${searchPersonURL}?query=${personQuery}&language=tr-TR&page=${page}`,
      options
    );
    const data = await response.json();
    console.log(data);
    setPersonData(data.results || []);
    setPersonPages(data.total_pages || 1);
  };

  const handleMovieSubmit = (e) => {
    e.preventDefault();
    fetchMovieData(1);
    setCurrentMoviePage(1);
  };

  const handleMoviePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= moviePages) {
      setCurrentMoviePage(newPage);
      fetchMovieData(newPage);
    }
  };
  const handlePersonSubmit = (e) => {
    e.preventDefault();
    fetchPersonData(1);
    setCurrentPersonPage(1);
  };

  const handlePersonPageChange = (newPage) => {
    if (newPage >= 1 && newPage <= personPages) {
      setCurrentPersonPage(newPage);
      fetchPersonData(newPage);
    }
  };

  return (
    <>
      <Appbar />
      <Header />
      <div className='container'>
        <div className='row'>
          <MovieForm
            handleMovieSubmit={handleMovieSubmit}
            setMovieQuery={setMovieQuery}
          />
          <PersonForm
            handlePersonSubmit={handlePersonSubmit}
            setPersonQuery={setPersonQuery}
          />
        </div>

        <div className='row'>
          <div className='col-12 col-md-8'>
            {movieData?.map((movie) => (
              <MovieCard key={movie.id} Movie={movie} imgURL={imgURL} />
            ))}
          </div>
          <div className='col-12 col-md-4'>
            {personData?.map((person) => (
              <PersonCard key={person.id} personData={person} imgURL={imgURL} />
            ))}{' '}
          </div>
        </div>
        {/* <MoviePagination
          currentMoviePage={currentMoviePage}
          moviePages={moviePages}
          handleMoviePageChange={handleMoviePageChange}
        /> */}
      </div>
    </>
  );
}

export default App;
