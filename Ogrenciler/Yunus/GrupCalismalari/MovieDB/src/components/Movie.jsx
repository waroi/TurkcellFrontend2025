import React from "react";
import { StyledMovieCard } from "./CardStyle";

const Movie = ({ movie }) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={movie.id}>
        <StyledMovieCard className="h-100">
          <img
            height={450}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
            }
            className="card-img-top img-fluid"
            alt={movie.original_title}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">
              {movie.overview.split(" ").splice(0, 50).join(" ")}
            </p>
            <p>Çıkış Tarihi: {movie.release_date}</p>
            <button type="button" className="btn btn-warning">
              IMDB{" "}
              <span className="badge text-bg-secondary">
                {movie.vote_average.toFixed(1)}
              </span>
            </button>
          </div>
          <div className="actors">
            {movie.actors?.map((actor) => (
              <img
                key={actor.id}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                    : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                }
                alt={actor.name}
                title={actor.name}
                width="50"
              />
            ))}
          </div>
        </StyledMovieCard>
      </div>
    </>
  );
};

export default Movie;
