import React from "react";
import { StyledMovieCard } from "./CardStyle";

const Movie = ({ movie }) => {
  const placeholderImage = "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg";

  const truncatedOverview = movie.overview ? movie.overview.split(" ").splice(0, 50).join(" ") + (movie.overview.split(" ").length > 50 ? "..." : "") : "";

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={movie.id}>
      <StyledMovieCard className="h-100">
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : placeholderImage}
          className="card-img-top img-fluid"
          alt={`${movie.original_title} Film posteri`}
          loading="lazy"
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{movie.original_title}</h5>
          {truncatedOverview && <p className="card-text">{truncatedOverview}</p>}
          <p>Çıkış Tarihi: <time dateTime={movie.release_date}>{movie.release_date}</time></p>
          <div className="d-flex align-items-center">
            <span className="me-2">IMDB: </span>
            <span className="badge bg-warning text-dark" aria-label={`Rating: ${movie.vote_average.toFixed(1)} out of 10`}>
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
        {movie.actors && movie.actors.length > 0 && (
          <div className="actors" aria-label="Cast">
            {movie.actors.map((actor) => (
              <img
                key={actor.id}
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}` : placeholderImage}
                alt={`Actor ${actor.name}`}
                title={actor.name}
                width="50"
                height="50"
                loading="lazy"
              />
            ))}
          </div>
        )}
      </StyledMovieCard>
    </div>
  );
};

export default Movie;