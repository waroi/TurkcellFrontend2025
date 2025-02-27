const Card = ({ wing }) => {
  console.log("aaa", wing.images[0]);

  return (
    <div className="card h-100">
      <div className="product-image-carousel m-1">
        <div id="productCarouselOne" className="carousel slide">
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
            data-bs-target="#productCarouselOne"
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
            data-bs-target="#productCarouselOne"
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
      <a href="./products/product-1.html" className="text-decoration-none">
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title fs-5 text-info fw-semibold">{wing.name}</h5>
          <div>
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
            {/* <a href="#" className="btn btn-secondary w-100">
              Sepete Ekle
            </a> */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
