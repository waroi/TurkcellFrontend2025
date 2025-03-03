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
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const placeholderImage =
  "https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const MovieCard = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="container movie-container">
      <h2 className="text-center my-4">🎬 Movies</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col">
            <div className="card h-100 shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderImage;
                }}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text flex-grow-1">
                  {truncateText(movie.overview, 100)}
                </p>
                <p>
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p>
                  <strong>Genres:</strong>{" "}
                  {movie.genre_ids
                    .map((id) => genreMap[id] || "Unknown")
                    .join(", ")}
                </p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span
                    className={`badge ${
                      movie.vote_average >= 7 ? "bg-success" : "bg-warning"
                    }`}
                  >
                    {movie.vote_average} ⭐
                  </span>
                  <small className="text-muted">{movie.vote_count} votes</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
