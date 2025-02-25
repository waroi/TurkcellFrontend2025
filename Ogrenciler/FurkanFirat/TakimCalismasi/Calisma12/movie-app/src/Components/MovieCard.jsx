import React from "react";

export default function MovieCard({ Movie, imageMovieURL }) {
  return (
    <>
      <div className="card mb-3 w-100">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={`${imageMovieURL}/${Movie.poster_path}`}
              className="img-fluid rounded-start"
              alt={Movie.original_title + " poster"}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{Movie.original_title}</h5>
              <p className="card-text">{Movie.overview}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {Movie.release_date}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
