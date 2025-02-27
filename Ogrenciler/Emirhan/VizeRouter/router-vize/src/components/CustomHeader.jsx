import React from "react";
import { NavLink } from "react-router";

const CustomHeader = () => {
  return (
    <div>
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
        <nav class="navbar navbar-expand-lg bg-transparent">
          <div class="container">
            <a
              class="navbar-brand fw-semibold text-primary fs-4"
              href="./index.html"
            >
              olmayanşeyler.
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item ">
                  <NavLink to="/">Anasayfa</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/about">Hakkımızda</NavLink>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kurumsal
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <NavLink to="/contact">İletişim</NavLink>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        <NavLink to="/SSS">Sıkça Sorulan Sorular</NavLink>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle outline-none border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="cat.jpeg"
                    class="rounded-circle profile-photo"
                    alt="Profile photo"
                  />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Profil
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Siparişlerim
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Ödeme Bilgileri
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Adres Bilgileri
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Çıkış Yap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default CustomHeader;
