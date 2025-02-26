import React from "react";
const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};
const genreMap = {
  12: "Adventure",
  28: "Action",
  878: "Sci-Fi",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

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
                <p className="card-text">{truncateText(movie.overview, 100)}</p>
                <p>
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p>
                  <strong>Genres:</strong>{" "}
                  {movie.genre_ids.map((id) => genreMap[id] || "Unknown").join(", ")}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className={`badge ${movie.vote_average >= 7 ? "bg-success" : "bg-warning"}`}>
                    {movie.vote_average} ⭐
                  </span>
                  <small className="text-muted">{movie.vote_count} votes</small>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieCard;

