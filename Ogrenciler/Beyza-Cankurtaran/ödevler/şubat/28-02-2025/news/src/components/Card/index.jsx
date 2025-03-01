import React from "react";
const Card = ({ newsItem }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={newsItem?.urlToImage || "https://via.placeholder.com/150"}
            className="img-fluid rounded-start"
            alt={newsItem?.title || "Haber görseli"}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{newsItem?.title}</h5>
            <p className="card-text">{newsItem?.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {newsItem?.publishedAt || "Tarih bilgisi yok"}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
