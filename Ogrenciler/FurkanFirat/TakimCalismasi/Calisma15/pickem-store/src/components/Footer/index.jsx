import React from "react";
import { NavLink } from "react-router";

function Footer() {
  return (
    <>
      <footer className="bg-extra-dark-purple text-white pt-20">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <h5>PICK'EM STORE</h5>
              <ul className="nav flex-column text-white">
                <li className="nav-item mb-2">
                  <NavLink to="/" className="nav-link p-0 text-white">
                    Anasayfa
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/hakkimizda" className="nav-link p-0 text-white">
                    Hakkımızda
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/sss" className="nav-link p-0 text-white">
                    S.S.S
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/iletisim" className="nav-link p-0 text-white">
                    İletişim
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <h5>ÜRÜNLER</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/oyuncular" className="nav-link p-0 text-white">
                    Oyuncular
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/bombalar" className="nav-link p-0 text-white">
                    Bombalar
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form className="contact-us-form">
                <h5>Pick'em Store'a abone olun.</h5>
                <p>Yeni gelen oyunculardan haberdar olmak için abone olun.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter" className="visually-hidden">
                    Email
                  </label>
                  <input
                    id="newsletter"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                  <button className="btn btn-primary text-nowrap" type="button">
                    Abone ol
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center border-top border-header-purple py-5">
            <p>
              © 2025 <span className="fw-bold text-gold">Pick'em Store </span>
              Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
