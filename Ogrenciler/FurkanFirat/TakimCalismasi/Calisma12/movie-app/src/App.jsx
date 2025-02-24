import { useState } from 'react';
import './App.css';
function App() {
  const [movieData, setMovieData] = useState({});
  const [query, setQuery] = useState('');
  const searchMovieURL = 'https://api.themoviedb.org/3/search/movie';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzFiNjQyYjY3YmFiY2M4NjNkNGI0MjgxNDc3YWMzZSIsIm5iZiI6MTc0MDQxNzQyNC42MzkwMDAyLCJzdWIiOiI2N2JjYTk5MDIzZmUxMTdlZTZhNDc2MDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wa65ycPLRl8D9je5Bmzb6029f-39QKLFU4h8RgcgP78',
    },
  };

  const fetchMovieData = async () => {
    const response = await fetch(`${searchMovieURL}?query=${query}`, options);
    const data = await response.json();
    setMovieData(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovieData();
    console.log(movieData);
  };
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              id='movieSearchInput'
              aria-describedby='movieSearchHelp'
              placeholder='Search...'
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
