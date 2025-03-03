import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router";

const HomeView = ({ news }) => {
  return (
    <div className="container py-5">
      <Outlet />
      {/* <div id="newsCarousel" className="carousel carousel-dark p-5 slide">
        <div className="carousel-indicators">
          {news?.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#newsCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner px-5">
          {news?.map((item) => (
            <div
              className={`${
                item.key == 0 ? "carousel-item active" : "carousel-item"
              }`}
              key={item.key}
            >
              <div className="card mb-3 rounded-5 mx-5">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={item?.image}
                      className="img-fluid rounded-start-5 h-100 object-fit-cover"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">{item?.name}</h5>
                      <p className="card-text">{item?.description}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Kaynak: {item?.source}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#newsCarousel"
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
          data-bs-target="#newsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
};

export default HomeView;
