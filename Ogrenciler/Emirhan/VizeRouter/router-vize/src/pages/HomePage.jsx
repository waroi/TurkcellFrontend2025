import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const url = "http://localhost:3000/products";
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("HomePage getAllProducts hata", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <main>
        <section className="home-banner">
          <div className="container-fluid px-0">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
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
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <img
                    src="anneterlg.jpg"
                    className="d-block w-100"
                    alt="Banner One"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="banner.jpg"
                    className="d-block w-100"
                    alt="Banner Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row m-0 ml-0 g-5">
              <div className="col-12 col-md-3 ps-0">
                <div className="row g-3">
                  <div className="col-md-12 px-0 mt-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control product-search"
                        placeholder="Ürün ara..."
                        aria-label="Search"
                      />
                      <button className="btn btn-primary" type="button">
                        <i className="fa-solid fa-search"></i>
                      </button>
                    </div>
                  </div>
                  <h6 className="p-0 d-none d-md-block">Sırala</h6>
                  <div className="card p-3 d-none d-md-block">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sortOptions"
                        id="oldToNew"
                      />
                      <label className="form-check-label" htmlFor="oldToNew">
                        Eskiden Yeniye
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sortOptions"
                        id="newToOld"
                      />
                      <label className="form-check-label" htmlFor="newToOld">
                        Yeniden Eskiye
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sortOptions"
                        id="priceHighToLow"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="priceHighToLow"
                      >
                        Düşük Fiyat
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sortOptions"
                        id="priceLowToHigh"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="priceLowToHigh"
                      >
                        Yüksek Fiyat
                      </label>
                    </div>
                  </div>
                  <h6 className="p-0 d-none d-md-block">Filtrele</h6>
                  <div className="card p-3 d-none d-md-block">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="oldToNew"
                      />
                      <label className="form-check-label" htmlFor="oldToNew">
                        En Sevilenler
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="newToOld"
                      />
                      <label className="form-check-label" htmlFor="newToOld">
                        En Ucuzlar
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="priceHighToLow"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="priceHighToLow"
                      >
                        Şok Edenler
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="priceLowToHigh"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="priceLowToHigh"
                      >
                        Yeni Çıkanlar
                      </label>
                    </div>
                  </div>
                  <h6 className="p-0 d-none d-md-block">Kategori</h6>
                  <div className="card p-3 d-none d-md-block">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="oldToNew"
                      />
                      <label className="form-check-label" htmlFor="oldToNew">
                        En Sevilenler
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="newToOld"
                      />
                      <label className="form-check-label" htmlFor="newToOld">
                        En Ucuzlar
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="priceHighToLow"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="priceHighToLow"
                      >
                        Şok Edenler
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="priceLowToHigh"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="priceLowToHigh"
                      >
                        Yeni Çıkanlar
                      </label>
                    </div>
                  </div>
                  <div className="col-12 text-end d-none d-md-block">
                    <button
                      type="button"
                      className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-3"
                    >
                      <i className="fa-solid fa-filter"></i>
                      <span>Filtre Uygula</span>
                    </button>
                  </div>

                  <div className="col-12 text-end d-md-none">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#filterModal"
                      className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-3"
                    >
                      <i className="fa-solid fa-filter"></i>
                      <span>Filtreleme</span>
                    </button>
                  </div>
                  <div
                    className="modal fade"
                    id="filterModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Filtreleme
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <h6 className="p-0 d-md-none">Sırala</h6>
                          <div className="card p-3 d-md-none mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="sortOptions"
                                id="oldToNew"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="oldToNew"
                              >
                                Eskiden Yeniye
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="sortOptions"
                                id="newToOld"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="newToOld"
                              >
                                Yeniden Eskiye
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="sortOptions"
                                id="priceHighToLow"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="priceHighToLow"
                              >
                                Düşük Fiyat
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="sortOptions"
                                id="priceLowToHigh"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="priceLowToHigh"
                              >
                                Yüksek Fiyat
                              </label>
                            </div>
                          </div>
                          <h6 className="p-0 d-md-none">Filtrele</h6>
                          <div className="card p-3 d-md-none mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="oldToNew"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="oldToNew"
                              >
                                En Sevilenler
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="newToOld"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="newToOld"
                              >
                                En Ucuzlar
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="priceHighToLow"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="priceHighToLow"
                              >
                                Şok Edenler
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="priceLowToHigh"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="priceLowToHigh"
                              >
                                Yeni Çıkanlar
                              </label>
                            </div>
                          </div>
                          <h6 className="p-0 d-md-none">Kategori</h6>
                          <div className="card p-3 d-md-none mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="oldToNew"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="oldToNew"
                              >
                                En Sevilenler
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="newToOld"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="newToOld"
                              >
                                En Ucuzlar
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="priceHighToLow"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="priceHighToLow"
                              >
                                Şok Edenler
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="priceLowToHigh"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="priceLowToHigh"
                              >
                                Yeni Çıkanlar
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Kapat
                          </button>
                          <button type="button" className="btn btn-primary">
                            Uygula
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 gx-3 col-12 col-md-9 pe-0 ps-0">
                {products.map((product) => (
                  <a
                    key={product?.id}
                    href={`/product/${product?.id}`}
                    className="col-md-6 col-lg-4 col-sm-12 text-decoration-none"
                  >
                    <div className="card border-0 px-0">
                      <img
                        src={product?.img}
                        className="card-img"
                        alt="Professor"
                      />
                      <div className="card-body px-0">
                        <h5 className="card-title fs-5 fw-medium text-line-clamp">
                          {product?.title}
                        </h5>
                        <p className="card-text fs-6 fw-normal m-0 text-body-tertiary">
                          Stokta var
                        </p>
                        <p className="card-text fs-6 fw-bold">
                          ${product?.price}
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-3"
                        >
                          <i className="fa-solid fa-cart-shopping"></i>
                          <span>İncele</span>
                        </button>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
