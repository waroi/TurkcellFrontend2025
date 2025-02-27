import React from "react";

export default function Details(urun) {
  return (
    <>
      <section class="prd py-5 bg-light">
        <div class="container">
          <div class="row align-items-center">
            <h3 class="text-center mb-3">{urun.title}</h3>
            <div class="col-lg-5 col-md-12 mb-2 p-3 pc bg-primary">
              <div id="productCarousel" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide-to="0"
                    class="active"
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
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://contentful.harrypotter.com/usf1vwtuqyxm/4dtIDCA65YwqHvjlk1IeiL/f93227f42e5d2d54f068540ec2bca7b8/the-invisibility-cloak_1_1800x1248.png"
                      class="d-block img-fluid w-100"
                      alt="Görünmezlik Pelerini"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://www.looper.com/img/gallery/who-gave-harry-potter-the-invisibility-cloak-and-why-is-it-important/intro-1688656055.jpg"
                      class="d-block img-fluid"
                      alt="Görünmez Harry"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-lg-7 col-md-12 ps-3">
              <h5 class="mb-2">Ürün Detayı</h5>
              <p class="mb-3">{urun.detail}</p>
              <div class="price mb-2">
                <h6 class="text-decoration-line-through text-success me-2">
                  {urun.eskifiyat}
                </h6>
                <h4 class="text-dark"> {urun.yenifiyat}</h4>
              </div>
              <div
                class="btn-group flex-wrap"
                role="group"
                aria-label="First group"
              >
                <button type="button" class="btn btn-warning p-1">
                  Sepete Ekle
                  <img
                    src="https://img.icons8.com/?size=25&id=P6ZYIof6BwLW&format=png&color=000000"
                    alt=""
                    class="mx-1"
                  />
                </button>
                <button type="button" class="btn btn-outline-warning p-1">
                  Karşılaştır
                  <img
                    src="https://img.icons8.com/?size=25&id=QqQ9t0fbQ4Yw&format=png&color=000000"
                    alt=""
                    class="mx-1"
                  />
                </button>
                <button type="button" class="btn btn-outline-warning p-1">
                  Favorilere Ekle
                  <img
                    src="https://img.icons8.com/?size=25&id=87&format=png&color=000000"
                    alt=""
                    class="mx-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
