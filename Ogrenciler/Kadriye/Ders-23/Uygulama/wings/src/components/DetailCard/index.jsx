const DetailCard = ({ wing }) => {
  if (!wing) {
    return <p>Yükleniyor</p>;
  }

  return (
    <section className="product py-5">
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="row align-items-center">
              <div className="col-md-6">
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
                            src={wing.images[0]}
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
              </div>
              <div className="col-md-6">
                <a href={wing.id} className="text-decoration-none text-info">
                  <div className="card-body">
                    <h5 className="card-title fs-4 text-info fw-bold">
                      {wing.name}
                    </h5>
                    <div className="mb-1">
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                      <i className="fa-solid fa-star text-warning"></i>
                    </div>
                    <div className="features">
                      <ul className="list-unstyled fw-medium">
                        <li className="text-secondary d-flex align-items-center mb-2">
                          <h6 className="text-info fw-semibold mb-0 me-2">
                            Ürün Kodu:
                          </h6>
                          {wing.code}
                        </li>
                        <li className="text-secondary d-flex align-items-center mb-2">
                          <h6 className="text-info fw-semibold mb-0 me-2">
                            Renk:
                          </h6>
                          {wing.color}
                        </li>
                        <li className="text-secondary d-flex align-items-top mb-2">
                          <h6 className="text-info fw-semibold mb-0 me-2">
                            Malzeme:
                          </h6>
                          {wing.material}
                        </li>
                        <li className="text-secondary d-flex align-items-center mb-2">
                          <h6 className="text-info fw-semibold mb-0 me-2">
                            Ağırlık:
                          </h6>
                          {wing.weight}
                        </li>
                        <li className="text-secondary">
                          <h6 className="text-info fw-semibold">Boyutlar:</h6>
                          <ul>
                            <li>Kanat Açıklığı: {wing.dimensions.wing_span}</li>
                            <li>Yükseklik: {wing.dimensions.height}</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <p className="fs-5 fw-semibold text-secondary">
                      {wing.price} <span>₺</span>
                    </p>
                    <a href="#" className="btn btn-secondary w-100">
                      Sepete Ekle
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
