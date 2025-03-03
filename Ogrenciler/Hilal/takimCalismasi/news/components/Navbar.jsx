import React from "react";
import { NavLink } from "react-router";

const Navbar = ({ handleCategory }) => {
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
                to="/sport"
                className="nav-link"
                onClick={() => handleCategory("sport")}
              >
                Spor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kategori/teknoloji"
                className="nav-link"
                onClick={() => handleCategory("teknoloji")}
              >
                Teknoloji
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/economy"
                className="nav-link"
                onClick={() => handleCategory("economy")}
              >
                Ekonomi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/siyaset"
                className="nav-link"
                onClick={() => handleCategory("siyaset")}
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
