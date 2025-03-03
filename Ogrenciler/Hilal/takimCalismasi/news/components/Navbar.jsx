import React from "react";
import { NavLink } from "react-router";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          News
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
              <NavLink
                to="/kategori/spor"
                className="nav-link"
                onClick={() => setCategory("spor")}
              >
                Spor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kategori/teknoloji"
                className="nav-link"
                onClick={() => setCategory("teknoloji")}
              >
                Teknoloji
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kategori/ekonomi"
                className="nav-link"
                onClick={() => setCategory("ekonomi")}
              >
                Ekonomi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kategori/siyaset"
                className="nav-link"
                onClick={() => setCategory("siyaset")}
              >
                Siyaset
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
