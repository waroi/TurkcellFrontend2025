import React from "react";
import styles from './navbar.module.css'
import Image from "next/image";
import mef from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg py-2 ${styles.bgColor}`}>
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          <Image src={mef} alt="logo" width={75} height={75} />
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
        <div className= "collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Anasayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#latest">
                Son yayımlananlar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#posts">
                Tüm bloglar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#subscribe">
                Abone ol
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
