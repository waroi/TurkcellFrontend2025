import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQwODYyYzUyNmZiMGM4NjY2NzViMWE3NzNkNjljNCIsIm5iZiI6MTc0MDQxNzYzNi44NzAwMDAxLCJzdWIiOiI2N2JjYWE2NDEyYmZjODViYzM2YmQ3NDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QA5o2BX3MaygLixSycU1ziJ_5y4NA7VitYSFOcqFQVk'
    }
  };
/*
  fetch('https://api.themoviedb.org/3/search/person?query=tom%20hanks&include_adult=false&language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
*/
  function GetMovie() {
    try {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => console.log(res))
    } catch {
      console.error();
    }
  }
  console.log(query);
  return (
    <>
      <h1>Movie</h1>
      <div className="card">
        <form className="d-flex" role="search">
          <input
          value={query}
          onChange={(e)=>{setQuery(e.target.value)}} 
          className="form-control me-2" 
          id="search"
          type="search" 
          placeholder="Search" 
          aria-label="Search" />
          <button className="btn btn-outline-success" onClick={() => { GetMovie() }} type="submit">Search</button>
        </form>
      </div>
    </>
  )
}

export default App;  