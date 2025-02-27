import { NavLink } from "react-router";
//import prenses from "/src/assets/prenses.webp";

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
              <div className="col-12 col-md-4 col-lg-4">
                <NavLink
                  to="/detail_1"
                  className="card product bg-light text-info product-1"
                >
                  <div className="product-img">
                    <img
                      src="/src/assets/prenses.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="my-3 mx-2">
                    <div className="d-flex justify-content-between">
                      <h5>İngiltere Prensesi</h5>
                      <i className="fa-regular fa-heart me-3 fs-5"></i>
                    </div>
                    <p>
                      Bir sonraki hayatınızda prenses olmayı garantilemek
                      istemez misiniz?
                    </p>
                    <div className="stars d-flex text-secondary">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="fiyat text-primary fs-3 ">$100.000.000</p>
                  </div>
                  <button className="btn btn-primary">
                    Sepete Ekle{" "}
                    <i className="fa-solid fa-cart-shopping ms-3"></i>
                  </button>
                </NavLink>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <NavLink
                  to="/detail_2"
                  className="card product bg-light text-info product-2"
                >
                  <div className="product-img">
                    <img src="./assets/CEO.webp" alt="" className="img-fluid" />
                  </div>
                  <div className="my-3 mx-2">
                    <div className="d-flex justify-content-between">
                      <h5>Başarılı bir CEO</h5>
                      <i className="fa-regular fa-heart me-3 fs-5"></i>
                    </div>
                    <p>
                      Bir sonraki hayatınızda dünyanın en başarılı CEO'larından
                      biri olmak istemez misiniz?
                    </p>
                    <div className="stars d-flex text-secondary">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="fiyat text-primary fs-3 ">$60.000.000</p>
                  </div>
                  <button className="btn btn-primary">
                    Sepete Ekle{" "}
                    <i className="fa-solid fa-cart-shopping ms-3"></i>
                  </button>
                </NavLink>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <NavLink
                  to="/detail_3"
                  className="card product bg-light text-info product-3"
                >
                  <div className="product-img">
                    <img
                      src="./assets/hollywood.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="my-3 mx-2">
                    <div className="d-flex justify-content-between">
                      <h5>Hollywood Yıldızı</h5>
                      <i className="fa-regular fa-heart me-3 fs-5"></i>
                    </div>
                    <p>
                      Bir sonraki hayatınızda en çok konuşulan Hollywood Yıldızı
                      olmak istemez misiniz?
                    </p>
                    <div className="stars d-flex text-secondary">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="fiyat text-primary fs-3 ">$50.000.000</p>
                  </div>
                  <button className="btn btn-primary">
                    Sepete Ekle{" "}
                    <i className="fa-solid fa-cart-shopping ms-3"></i>
                  </button>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <NavLink
                  to="/detail_4"
                  className="card product bg-light text-info product-4"
                >
                  <div className="product-img">
                    <img
                      src="./assets/ressam.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="my-3 mx-2">
                    <div className="d-flex justify-content-between">
                      <h5>Sanatın Zirvesindeki Ressam</h5>
                      <i className="fa-regular fa-heart me-3 fs-5"></i>
                    </div>
                    <p>
                      Bir sonraki hayatınızda eserleriyle nam salmış bir ressam
                      olmak istemez misiniz?
                    </p>
                    <div className="stars d-flex text-secondary">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="fiyat text-primary fs-3 ">$38.000.000</p>
                  </div>
                  <button className="btn btn-primary">
                    Sepete Ekle{" "}
                    <i className="fa-solid fa-cart-shopping ms-3"></i>
                  </button>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <NavLink
                  to="/detail_5"
                  className="card product bg-light text-info product-5"
                >
                  <div className="product-img">
                    <img
                      src="./assets/adada-yasayan.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="my-3 mx-2">
                    <div className="d-flex justify-content-between">
                      <h5>Adada Yaşayan İş İnsanı</h5>
                      <i className="fa-regular fa-heart me-3 fs-5"></i>
                    </div>
                    <p>
                      Bir sonraki hayatınızda ada sahibi olup o adada kocaman
                      bir eviniz olsun istemez misiniz?
                    </p>
                    <div className="stars d-flex text-secondary">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="fiyat text-primary fs-3 ">$80.000.000</p>
                  </div>
                  <button className="btn btn-primary">
                    Sepete Ekle{" "}
                    <i className="fa-solid fa-cart-shopping ms-3"></i>
                  </button>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <NavLink
                  to="/detail_6"
                  className="card product bg-light text-info product-6"
                >
                  <div className="product-img">
                    <img
                      src="./assets/yatla-gezen.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="my-3 mx-2">
                    <div className="d-flex justify-content-between">
                      <h5>Yatla Gezen İnsan</h5>
                      <i className="fa-regular fa-heart me-3 fs-5"></i>
                    </div>
                    <p>
                      Bir sonraki hayatınızda yatınızla dünya turu yapmak
                      istemez misiniz?
                    </p>
                    <div className="stars d-flex text-secondary">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="fiyat text-primary fs-3 ">$65.000.000</p>
                  </div>
                  <button className="btn btn-primary">
                    Sepete Ekle{" "}
                    <i className="fa-solid fa-cart-shopping ms-3"></i>
                  </button>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <NavLink
                  to="/detail_7"
                  className="card product bg-light text-info product-7"
                >
                  <div className="product-img">
                    <img
                      src="./assets/sarkici.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="my-3 mx-2">
                    <div className="d-flex justify-content-between">
                      <h5>Megastar Şarkıcı</h5>
                      <i className="fa-regular fa-heart me-3 fs-5"></i>
                    </div>
                    <p>
                      Bir sonraki hayatınızda sesiyle herkesi mest eden ödül
                      rekorları kırmış bir şarkıcı olmak istemez misiniz?
                    </p>
                    <div className="stars d-flex text-secondary">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="fiyat text-primary fs-3 ">$70.000.000</p>
                  </div>
                  <button className="btn btn-primary">
                    Sepete Ekle{" "}
                    <i className="fa-solid fa-cart-shopping ms-3"></i>
                  </button>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <NavLink
                  to="/detail_8"
                  className="card product bg-light text-info product-8"
                >
                  <div className="product-img">
                    <img
                      src="./assets/araba-koleksiyon.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="my-3 mx-2">
                    <div className="d-flex justify-content-between">
                      <h5>Araba Koleksiyoncusu</h5>
                      <i className="fa-regular fa-heart me-3 fs-5"></i>
                    </div>
                    <p>
                      Bir sonraki hayatınızda mükemmel arabaların olduğu bir
                      koleksiyon sahibi olmak istemez misiniz?
                    </p>
                    <div className="stars d-flex text-secondary">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="fiyat text-primary fs-3 ">$95.000.000</p>
                  </div>
                  <button className="btn btn-primary">
                    Sepete Ekle{" "}
                    <i className="fa-solid fa-cart-shopping ms-3"></i>
                  </button>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <NavLink
                  to="/detail_9"
                  className="card product bg-light text-info product-9"
                >
                  <div className="product-img">
                    <img
                      src="./assets/casinocu.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="my-3 mx-2">
                    <div className="d-flex justify-content-between">
                      <h5>Lüks Casino Sahibi</h5>
                      <i className="fa-regular fa-heart me-3 fs-5"></i>
                    </div>
                    <p>
                      Bir sonraki hayatınızda dünyada en çok nam salmış
                      casinonun sahibi olmak istemez misiniz?
                    </p>
                    <div className="stars d-flex text-secondary">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="fiyat text-primary fs-3 ">$45.000.000</p>
                  </div>
                  <button className="btn btn-primary">
                    Sepete Ekle{" "}
                    <i className="fa-solid fa-cart-shopping ms-3"></i>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
