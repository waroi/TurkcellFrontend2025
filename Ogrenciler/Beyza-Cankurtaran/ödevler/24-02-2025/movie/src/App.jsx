import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQwODYyYzUyNmZiMGM4NjY2NzViMWE3NzNkNjljNCIsIm5iZiI6MTc0MDQxNzYzNi44NzAwMDAxLCJzdWIiOiI2N2JjYWE2NDEyYmZjODViYzM2YmQ3NDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QA5o2BX3MaygLixSycU1ziJ_5y4NA7VitYSFOcqFQVk'
    }
  };

  const GetMovie = async (e) => {
    e.preventDefault();
    try {//chat şöyle bişi verdi!
      const movieResponse = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
      const movieData = await movieResponse.json();
      setMovies(movieData.results || []);

      const actorResponse = await fetch(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`, options);
      const actorData = await actorResponse.json();
      setActors(actorData.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1>Movie Search</h1>
      <div className="card p-3">
        <form className="d-flex" role="search" onSubmit={GetMovie}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control me-2"
            type="search"
            placeholder="Search for a movie or actor"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>


    </>
  );
}

export default App;
