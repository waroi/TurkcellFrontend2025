import React from "react";

const SportNewsView = ({ sport }) => {
  return (
    <>
      <div className="row">
        {sport?.result?.length > 0 ? (
          sport.result.map((news) => (
            <div className="col-md-4">
              <div key={news.key} className="card mb-3">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <img
                    src={
                      news.image ??
                      "https://images.squarespace-cdn.com/content/v1/5f7f4e5bbc83941ad6477e0f/1619116228554-O1LNDYMZPHCUL6TMWBT3/Undefinedlogo.jpg"
                    }
                    className="img-fluid"
                    alt="Haber görseli"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{news.name}</h5>
                  <p className="card-text">{news.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">{news.source}</small>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Yükleniyor veya genel haberler bulunamadı.</p>
        )}
      </div>
    </>
  );
};

export default SportNewsView;
