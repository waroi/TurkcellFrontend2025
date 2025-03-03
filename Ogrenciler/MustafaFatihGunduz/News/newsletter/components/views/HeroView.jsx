import React from "react";

const HeroView = ({ hero }) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={hero?.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{hero?.name}</h5>
              <p className="card-text">{hero?.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">{hero?.source}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroView;
