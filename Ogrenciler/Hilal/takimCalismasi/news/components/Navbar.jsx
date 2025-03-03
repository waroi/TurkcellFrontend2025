import React from "react";
import { NavLink } from "react-router";
import "../src/App.css";

const Navbar = ({ handleCategory }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg py-4 bg-white">
      <div className="container">
        <a className="navbar-brand display-6 fs-4 fw-bold" href="/">
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/sport"
                className="nav-link display-6 fs-5"
                onClick={() => handleCategory("sport")}
              >
                Spor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/technology"
                className="nav-link display-6 fs-5"
                onClick={() => handleCategory("technology")}
              >
                Teknoloji
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/economy"
                className="nav-link display-6 fs-5"
                onClick={() => handleCategory("economy")}
              >
                Ekonomi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/magazine"
                className="nav-link display-6 fs-5"
                onClick={() => handleCategory("magazine")}
              >
                Magazin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
