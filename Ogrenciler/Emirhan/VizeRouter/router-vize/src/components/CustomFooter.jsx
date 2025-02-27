import React from "react";

const CustomFooter = () => {
  return (
    <div>
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
    </div>
  );
};

export default CustomFooter;
