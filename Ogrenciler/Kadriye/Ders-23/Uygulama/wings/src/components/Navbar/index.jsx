import React from 'react'
import logoLeft from "../../assets/images/l-3.png"; // Doğrudan import et
import logoRight from "../../assets/images/l-2.png";

const index = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-danger sticky-top top-0 py-0">
      <div className="container align-items-center">
        <a
          className="navbar-brand d-flex align-items-center text-white text-uppercase p-0"
          href="./index.html"
        >
          <img src={logoLeft} alt="logo left" height={50} />

          <h2 className="m-0">Wings</h2>
          <img src={logoRight} alt="logo right" height={50} />
        </a>
        <button
          className="navbar-toggler py-2"
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
          className="collapse navbar-collapse justify-content-end h-100"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item position-relative">
              <a
                className="nav-link active text-white text-uppercase h-100 py-3"
                aria-current="page"
                href="index.html"
              >
                <i className="fa-solid fa-house me-1"></i> Anasayfa
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white text-uppercase py-3"
                href="./about_us.html"
              >
                <i className="fa-regular fa-address-card me-1"></i>
                Hakkımızda
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white text-uppercase py-3"
                href="#products"
              >
                <i className="fa-solid fa-list me-1"></i>
                Ürünler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-uppercase py-3">
                <i className="fas fa-heart me-1"></i> Favorilerim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-uppercase py-3">
                <i className="fas fa-basket-shopping me-1"></i> Sepet
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-uppercase py-3">
                <i className="fas fa-user me-1"></i> Profil
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-info h-100 rounded-0"
                data-bs-toggle="modal"
                data-bs-target="#SSSModal"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=6651&format=png&color=ffffff"
                  alt="SSS image"
                  height={50}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default index

