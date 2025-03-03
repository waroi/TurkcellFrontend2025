import React from "react";
import { NavLink, Outlet } from "react-router";

const NewsletterView = () => {
  return (
    <>
      <h1 className="text-black">Haberler</h1>

      <Outlet />
      <ul className="align-items-center justify-content-center list-unstyled d-flex gap-4 fs-2">
        <li>
          <NavLink to="/haberler/spor">Spor</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">Ekonomi</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/sağlık">Sağlık</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/genel">Genel</NavLink>
        </li>
      </ul>
      {/* <div className="row">
        <div className="col-lg-3">
          <h4 className="fs-3 text-black text-center mb-3">
            <NavLink
              to="/haberler/spor"
              className="text-decoration-none text-black"
            >
              Spor Kategorisi
            </NavLink>
          </h4>
          {sports?.result?.length > 0 ? (
            sports.result.map((sport) => (
              <div key={sport.key} className="card mb-3">
                <a href={sport.url} target="_blank" rel="noreferrer">
                  <img
                    src={
                      sport.image ??
                      "https://images.squarespace-cdn.com/content/v1/5f7f4e5bbc83941ad6477e0f/1619116228554-O1LNDYMZPHCUL6TMWBT3/Undefinedlogo.jpg"
                    }
                    className="img-fluid"
                    alt="Haber görseli"
                  />
                </a>
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
          <h4 className="fs-3 text-black text-center mb-3">
            <a href="" className="text-decoration-none text-black">
              Ekonomi Kategorisi
            </a>
          </h4>
          {economys?.result?.length > 0 ? (
            economys.result.map((economy) => (
              <div key={economy.key} className="card mb-3">
                <a href={economy.url} target="_blank" rel="noreferrer">
                  <img
                    src={
                      economy.image ??
                      "https://images.squarespace-cdn.com/content/v1/5f7f4e5bbc83941ad6477e0f/1619116228554-O1LNDYMZPHCUL6TMWBT3/Undefinedlogo.jpg"
                    }
                    className="img-fluid"
                    alt="Haber görseli"
                  />
                </a>
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
          <h4 className="fs-3 text-black text-center mb-3">
            {" "}
            <a href="" className="text-decoration-none text-black">
              Genel Kategorisi
            </a>
          </h4>
          {generals?.result?.length > 0 ? (
            generals.result.map((general) => (
              <div key={general.key} className="card mb-3">
                <a href={general.url} target="_blank" rel="noreferrer">
                  <img
                    src={
                      general.image ??
                      "https://images.squarespace-cdn.com/content/v1/5f7f4e5bbc83941ad6477e0f/1619116228554-O1LNDYMZPHCUL6TMWBT3/Undefinedlogo.jpg"
                    }
                    className="img-fluid"
                    alt="Haber görseli"
                  />
                </a>
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
          <h4 className="fs-3 text-black text-center mb-3">
            <NavLink to="sağlık" className="text-decoration-none text-black">
              Sağlık Kategorisi
            </NavLink>
          </h4>
          {healths?.result?.length > 0 ? (
            healths.result.map((health) => (
              <div key={health.key} className="card mb-3">
                <a href={health.url} target="_blank" rel="noreferrer">
                  <img
                    src={
                      health.image ??
                      "https://images.squarespace-cdn.com/content/v1/5f7f4e5bbc83941ad6477e0f/1619116228554-O1LNDYMZPHCUL6TMWBT3/Undefinedlogo.jpg"
                    }
                    className="img-fluid"
                    alt="Haber görseli"
                  />
                </a>
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
      </div> */}
    </>
  );
};

export default NewsletterView;
