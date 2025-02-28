import { NavLink } from "react-router";

import products from "../data.json";

const Home = () => {
  return (
    <>
      <header className="header-section position-relative">
        <div className="container">
          <div className="d-flex flex-column align-items-start justify-content-center py-240 header-content position-relative text-info">
            <h1 className="fw-bold display-2 title">
              Ölünce Beni Kim Doğuracak?
            </h1>
            <p className="fs-5">
              Yeniden doğduğunuzda yaşayayacağınız hayatı seçmek artık tamamen
              sizin elinizde...
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className="products py-3" id="products">
          <div className="container">
            <div className="urun-baslik d-flex flex-column justify-content-center align-items-center text-info py-5">
              <h2 className="fs-1 fw-bold text-primary text-uppercase">
                Ürünler
              </h2>
              <p className="fs-5">
                Hayalinizdeki yaşamlar aşağıda mevcuttur. Sizler en güzel
                yaşamlara layıksınız...
              </p>
            </div>
            <div className="row g-4">
              {products.products.map((product) => (
                <div key={product.id} className="col-12 col-md-4 col-lg-4">
                  <NavLink
                    to={`/product/${product.id}`}
                    className="card product bg-light text-info product-1"
                  >
                    <div className="product-img">
                      <img
                        src={product.image.src}
                        alt={product.image.alt}
                        className="img-fluid"
                      />
                    </div>
                    <div className="my-3 mx-2">
                      <div className="d-flex justify-content-between">
                        <h5>{product.title}</h5>
                        <i className="fa-regular fa-heart me-3 fs-5"></i>
                      </div>
                      {
                        <p>
                          {product?.description
                            ?.split(" ")
                            .slice(0, 10)
                            .join(" ")}
                          ...
                        </p>
                      }
                      <div className="stars d-flex text-secondary">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p className="fiyat text-primary fs-3 ">
                        {product.price}
                      </p>
                    </div>
                    <button className="btn btn-primary">
                      Sepete Ekle{" "}
                      <i className="fa-solid fa-cart-shopping ms-3"></i>
                    </button>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
