import React from "react";
import { useParams } from "react-router";
import data from "../../data/data.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = data.find((p) => p.id === id);
  return (
    <>
      <section className="prd py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <h3 className="text-center mb-3">{product.title}</h3>
            <div className="col-lg-5 col-md-12 mb-2 p-3 pc bg-primary">
              <div id="productCarousel" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={product.urunPhotos[1].path}
                      className="d-block img-fluid w-100"
                      alt="Delüminatör"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={product.urunPhotos[0].path}
                      className="d-block img-fluid"
                      alt="Delüminatör"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#productCarousel"
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
                  data-bs-target="#productCarousel"
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
            <div className="col-lg-7 col-md-12 ps-3">
              <h5 className="mb-2">Ürün Detayı</h5>
              <p className="mb-3">{product.description}</p>
              <div className="price mb-2">
                <h6 className="text-decoration-line-through text-success me-2">
                  {product.oldPrice}
                </h6>
                <h4 className="text-dark">{product.newPrice}</h4>
              </div>
              <div
                className="btn-group flex-wrap"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-warning p-1">
                  Sepete Ekle
                  <img
                    src="https://img.icons8.com/?size=25&id=P6ZYIof6BwLW&format=png&color=000000"
                    alt=""
                    className="mx-1"
                  />
                </button>
                <button type="button" className="btn btn-outline-warning p-1">
                  Karşılaştır
                  <img
                    src="https://img.icons8.com/?size=25&id=QqQ9t0fbQ4Yw&format=png&color=000000"
                    alt=""
                    className="mx-1"
                  />
                </button>
                <button type="button" className="btn btn-outline-warning p-1">
                  Favorilere Ekle
                  <img
                    src="https://img.icons8.com/?size=25&id=87&format=png&color=000000"
                    alt=""
                    className="mx-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
