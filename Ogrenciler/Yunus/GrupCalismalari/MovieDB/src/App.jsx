import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movieName, setMovieName] = useState('batman')
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([])

  const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=en-US&page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTIxMTY4YjQxMGZjOTYwY2M3Yjk3MWJhYWEyY2Q1ZSIsIm5iZiI6MTcyNDA1MjA4Mi40ODYsInN1YiI6IjY2YzJmMjcyNjNkMjg4NzA5ZGEyOGY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gfcDK95-SIr-vwG6UT-yafyB7-mBOvzF5rT_EbtgKak'
    }
  };

  useEffect(() => {
    getMovies()
  }, [page])

  const getMovies = () => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
        // data.map((movie,index))
      })
      .catch(err => console.error(err));
  }


  //
  const url2 = 'https://api.themoviedb.org/3/search/person?query=elon%20musk&include_adult=false&language=en-US&page=1';
  const options2 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTIxMTY4YjQxMGZjOTYwY2M3Yjk3MWJhYWEyY2Q1ZSIsIm5iZiI6MTcyNDA1MjA4Mi40ODYsInN1YiI6IjY2YzJmMjcyNjNkMjg4NzA5ZGEyOGY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gfcDK95-SIr-vwG6UT-yafyB7-mBOvzF5rT_EbtgKak'
    }
  };

  fetch(url2, options2)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
  return (
    <>
      <div className="container p-3">
        <div className="form-floating mb-3">
          <input type="email" value={movieName} onChange={(e) => setMovieName(e.target.value)} className="form-control" id="movieName" placeholder="Film İsmi" />
          <label htmlFor="movieName">Email address</label>
          <button className="btn btn-primary" onClick={getMovies}>Ara</button>
        </div>

        <div className="row">
          {/* // https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png İMAGE PATH */}
          {movies.map((movie, index) => (
            <div className="col-lg-3 mb-3" key={movie.id}>
              <div className="card h-100">
                <img height={450} src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'} className="card-img-top" alt={movie.original_title} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">
                    {movie.original_title}
                  </h5>
                  <p className="card-text">
                    {movie.overview}
                  </p>
                  <p>
                    Çıkış Tarihi: {movie.release_date}
                  </p>
                  <button type="button" class="btn btn-warning">
                    IMDB <span class="badge text-bg-secondary">
                      {(movie.vote_average).toFixed(1)}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
