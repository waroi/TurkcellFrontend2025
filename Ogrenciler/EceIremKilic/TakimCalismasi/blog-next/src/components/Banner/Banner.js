import React from "react";

const Banner = () => {
  return (
    <div className="container p-5">
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide px-5"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-7">
                  <img
                    src="https://kapadokyaturfiyati.com.tr/wp-content/uploads/2023/10/kizilcukur-vadisi.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <div className="card-body">
                    <p className="card-title display-4 pe-5 text-center">
                      Yolda olmak, özgürlük, serin bir his.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-7">
                  <img
                    src="https://www.kackarbal.com/wp-content/uploads/2016/09/xkackardag.jpg.pagespeed.ic.XBS-HdAkG0.webp"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-5 d-flex align-items-center px-4">
                  <div className="card-body">
                    <p className="card-title display-4 pe-5 text-center">
                      Dünyayı geziyorum, tarzım bu işte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-7">
                  <img
                    src="https://img.freepik.com/free-photo/alania-costline-sea-view_158595-6239.jpg?t=st=1741641001~exp=1741644601~hmac=fb60beb12fbd70c4afd8107cd9aaf972b49206ee169fe224863da2930aad3b11&w=1060"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <div className="card-body ">
                    <p className="card-title display-4 pe-5 text-center">
                      Keşfe çık, hayat çok kısa, tadını çıkar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
