import { useState ,useEffect } from 'react';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">

      <div className="container-fluid w-100">
        <a className="navbar-brand ms-5" href="#">Çok Gezenti</a>
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

    {/* Menü öğeleri */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Anasayfa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hakkımızda</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5" href="#">İletişim</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};


export default Navbar;