import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Anasayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Spor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Teknoloji
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ekonomi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Siyaset
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
