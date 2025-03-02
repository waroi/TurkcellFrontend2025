import React from "react";

const NewsletterView = ({ sports, economys, generals, healths }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          {sports?.result?.length > 0 ? (
            sports.result.map((sport) => (
              <div key={sport.key} className="card mb-3">
                <img
                  src={
                    sport.image ??
                    "https://images.squarespace-cdn.com/content/v1/5f7f4e5bbc83941ad6477e0f/1619116228554-O1LNDYMZPHCUL6TMWBT3/Undefinedlogo.jpg"
                  }
                  className="img-fluid"
                  alt="Haber görseli"
                />
                <div className="card-body">
                  <h5 className="card-title">{sport.name}</h5>
                  <p className="card-text">{sport.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {sport.source}
                    </small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Yükleniyor veya spor haberleri bulunamadı.</p>
          )}
        </div>
        <div className="col-lg-3">
          {economys?.result?.length > 0 ? (
            economys.result.map((economy) => (
              <div key={economy.key} className="card mb-3">
                <img
                  src={
                    economy.image ??
                    "https://images.squarespace-cdn.com/content/v1/5f7f4e5bbc83941ad6477e0f/1619116228554-O1LNDYMZPHCUL6TMWBT3/Undefinedlogo.jpg"
                  }
                  className="img-fluid"
                  alt="Haber görseli"
                />
                <div className="card-body">
                  <h5 className="card-title">{economy.name}</h5>
                  <p className="card-text">{economy.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {economy.source}
                    </small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Yükleniyor veya ekonomi haberleri bulunamadı.</p>
          )}
        </div>

        <div className="col-lg-3">
          {generals?.result?.length > 0 ? (
            generals.result.map((general) => (
              <div key={general.key} className="card mb-3">
                <img
                  src={
                    general.image ??
                    "https://images.squarespace-cdn.com/content/v1/5f7f4e5bbc83941ad6477e0f/1619116228554-O1LNDYMZPHCUL6TMWBT3/Undefinedlogo.jpg"
                  }
                  className="img-fluid"
                  alt="Haber görseli"
                />
                <div className="card-body">
                  <h5 className="card-title">{general.name}</h5>
                  <p className="card-text">{general.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {general.source}
                    </small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Yükleniyor veya genel haberler bulunamadı.</p>
          )}
        </div>
        <div className="col-lg-3">
          {healths?.result?.length > 0 ? (
            healths.result.map((health) => (
              <div key={health.key} className="card mb-3">
                <img
                  src={health.image}
                  className="img-fluid"
                  alt="Haber görseli"
                />
                <div className="card-body">
                  <h5 className="card-title">{health.name}</h5>
                  <p className="card-text">{health.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {health.source}
                    </small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Yükleniyor veya sağlık haberleri bulunamadı.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsletterView;
