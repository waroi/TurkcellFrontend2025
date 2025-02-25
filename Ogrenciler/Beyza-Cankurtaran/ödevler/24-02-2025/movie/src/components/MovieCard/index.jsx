import React from "react";

const MovieCard = (movies) => {
  console.log(movies);
  return (
    <div>
      {movies.length > 0 &&
        movies.movies.map((movie) => (
          <div key={movie.id} className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src={movie.poster_path}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieCard;
