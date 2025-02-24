import React from "react";

export default function SearchCard(Movie) {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
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
