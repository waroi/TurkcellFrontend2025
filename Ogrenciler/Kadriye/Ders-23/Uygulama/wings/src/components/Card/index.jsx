import { NavLink } from "react-router";

const Card = ({ wing }) => {
  return (
    <div className="card h-100">
      <div className="product-image-carousel m-1">
        <div id={wing.code} className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active p-3">
              <div className="carousel-img ratio ratio-1x1">
                <img
                  src={wing.images[0]}
                  className="d-block w-100"
                  alt="angel wing"
                />
              </div>
            </div>
            <div className="carousel-item p-3">
              <div className="carousel-image ratio ratio-1x1">
                <img
                  src={wing.images[1]}
                  className="d-block w-100"
                  alt="angel wing"
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev justify-content-start"
            type="button"
            data-bs-target={"#" + wing.code}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next justify-content-end"
            type="button"
            data-bs-target={"#" + wing.code}
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
      <NavLink
        to={"/product-detail-view/" + wing.id}
        className="text-decoration-none h-100"
      >
        <div className="card-body d-flex flex-column justify-content-between h-100">
          <h5 className="card-title fs-5 text-info fw-semibold">{wing.name}</h5>
          <div className="mt-auto">
            <div className="mb-1">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
            </div>
            <p className="fs-6 fw-semibold text-secondary">
              {wing.price} <span>₺</span>
            </p>
            <a href="#" className="btn btn-secondary w-100 ">
              Sepete Ekle
            </a>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
