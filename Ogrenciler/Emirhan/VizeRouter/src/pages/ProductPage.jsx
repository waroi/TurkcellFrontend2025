import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    try {
      const url = "http://localhost:3000/products";
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <header>
        <div className="container-fluid px-0">
          <div className="d-flex bg-primary d-flex py-4 overflow-hidden position-relative align-items-center">
            <span className="scrolling-text1">
              Süper kampanya! Tüm ürünlerde %50'ye varan indirim - Acele edin!
            </span>
            <span className="scrolling-text2">
              Süper kampanya! Tüm ürünlerde %50'ye varan indirim - Acele edin!
            </span>
            <span className="scrolling-text3">
              Süper kampanya! Tüm ürünlerde %50'ye varan indirim - Acele edin!
            </span>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container">
            <a
              className="navbar-brand fw-semibold text-primary fs-4"
              href="../index.html"
            >
              olmayanşeyler.
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="../index.html"
                  >
                    Ana Sayfa
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./about.html">
                    Hakkımızda
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kurumsal
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="./contact.html">
                        İletişim
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="../html/sss.html">
                        Sık Sorulan Sorular
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle outline-none border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="cat.jpeg"
                    className="rounded-circle profile-photo"
                    alt="Profile Photo"
                  />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Siparişlerim
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ödeme Bilgileri
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Adres Bilgileri
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Çıkış Yap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="container">
          <nav aria-label="breadcrumb" className="mt-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a
                  href="../index.html"
                  className="text-decoration-none text-black"
                >
                  Ana Sayfa
                </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <a
                  href="./shop.html"
                  className="text-decoration-none text-black"
                >
                  Mağaza
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product?.title}
              </li>
            </ol>
          </nav>
          <div className="card my-5 border-0">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={product?.img}
                  className="rounded product-img"
                  alt="Product Image"
                />
              </div>
              <div className="col-md-6">
                <div className="card-body d-flex flex-column justify-content-between h-100 pb-0 ps-0 ps-md-5">
                  <h5 className="card-title fs-3">{product?.title}</h5>
                  <p className="card-text fs-3 fw-bold">${product?.price}</p>
                  <p className="card-text">{product?.description}</p>
                  <p className="card-text fs-6 fw-normal m-0 text-body-tertiary">
                    Stokta var
                  </p>

                  <div className="d-flex gap-3">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#cartModal"
                      className="btn btn-primary w-50 d-flex align-items-center justify-content-center gap-3"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span>Sepete Ekle</span>
                    </button>
                    <div
                      className="modal fade"
                      id="cartModal"
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
                              Sepete eklendi!
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            Ürün başarılı bir şekilde sepete eklendi. Alışverişe
                            devam edebilir veya ürünleri satın alabilirsiniz.
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
                              Sepete git
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-light w-50 d-flex align-items-center justify-content-center gap-3"
                    >
                      <i className="fa-solid fa-tag"></i>
                      <span>Hemen Satın Al</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="mb-4 fw-bolder">Ürün Özellikleri</h3>
          <div className="list-group list-group-flush mb-5">
            <div className="list-group-item px-0 py-3" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Hızlı Karar Mekanizması</h5>
              </div>
              <p className="mb-1">
                Karne döneminde saniyeler içinde sınırdaki öğrenciyi geçirme
                kararı alır.
              </p>
            </div>
            <div className="list-group-item px-0 py-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Empati Yeteneği Gelişmiş</h5>
              </div>
              <p className="mb-1">
                Öğrencilerin zorluklarını anlama konusunda üstün bir sezgiye
                sahiptir.
              </p>
            </div>
            <div className="list-group-item px-0 py-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Not Esnekliği</h5>
              </div>
              <p className="mb-1">
                49.5 gibi rakamları 50’ye yuvarlama konusunda usta.
              </p>
            </div>
            <div className="list-group-item px-0 py-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Motivasyon Ustası</h5>
              </div>
              <p className="mb-1">
                Ders sonu konuşmalarıyla öğrencilere moral verir, özgüveni
                artırır.
              </p>
            </div>
            <div className="list-group-item px-0 py-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">İkinci Şans Verme Garantisi</h5>
              </div>
              <p className="mb-1">
                Her öğrencinin hata yapma hakkını savunur ve bu hakları tanır.{" "}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-4 pe-32">
              <a
                className="footer-brand text-white fw-semibold fs-3 text-decoration-none"
                href="#"
              >
                olmayanşeyler.
              </a>
              <p className="text-secondary fs-5">
                Yeni ürünlerden ilk sen haberdar olmak için bültenimize abone
                ol!
              </p>
              <div className="input-group mb-5">
                <input
                  type="text"
                  className="form-control bg-primary border border-left-0 text-white footer-input py-2"
                  placeholder="Abone ol..."
                  aria-label="Search"
                />
                <button className="btn btn-light" type="button">
                  <i className="fa-solid fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="footer-title-custom mb-3 fw-medium">
                BAĞLANTILAR
              </h5>
              <ul className="footer-nav list-unstyled">
                <li className="py-1">
                  <a href="#" className="text-decoration-none">
                    Anasayfa
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-decoration-none">
                    Ürünler
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-decoration-none">
                    Çerez Politikası
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-decoration-none">
                    Sık Sorulan Sorular
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-decoration-none">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="footer-title-custom mb-3 fw-medium">İLETİŞİM</h5>
              <address className="text-secondary d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-location-dot fs-5"></i>
                  Atatürk Mah. Ankara Sok. No:42
                </div>
                <div className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-phone fs-5"></i>
                  +90 555 555 55 55
                </div>
                <div className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-envelope fs-5"></i>
                  korhanemirhann@gmail.com
                </div>
              </address>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between mt-3 pt-2">
            <div className="w-100 d-flex align-items-center justify-content-center justify-content-sm-start">
              <p className="small m-0 text-secondary">
                &copy; 2025 Tüm Hakları Saklıdır. Made by emirkrhan
              </p>
            </div>

            <div className="footer-social d-flex justify-content-center justify-content-sm-end gap-4 fs-5 text-secondary py-4">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProductPage;
