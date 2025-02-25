import React from "react";

const MovieCard = ({ movies }) => {
  console.log("Movies List:", movies);
  return (
    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
      {movies.length > 0 &&
        movies.map((movie) => (
          <div key={movie.id} className="col">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default MovieCard;
