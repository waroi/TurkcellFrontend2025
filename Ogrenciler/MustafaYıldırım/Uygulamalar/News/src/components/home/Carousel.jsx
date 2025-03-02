import React from "react";

function Carousel({ news }) {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide my-5 w-75 m-auto rounded-3"
      data-bs-ride="carousel"
      style={{
        height: "500px",
        width: "75%",
        maxWidth: "1200px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="carousel-indicators rounded-2">
        {news.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner" style={{ height: "100%" }}>
        {news.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="3000"
            style={{ height: "100%" }}
          >
            <img
              src={item.image}
              className="d-block w-100"
              alt={item.name}
              style={{
                height: "100%",
              }}
            />
            <div
              className="carousel-caption d-none d-md-block bg-light bg-opacity-25 rounded-2"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                right: "10px",
                color: "black",
              }}
            >
              <h5>{item.name}</h5>
              <p className="fst-italic">Kaynak: {item.source}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
