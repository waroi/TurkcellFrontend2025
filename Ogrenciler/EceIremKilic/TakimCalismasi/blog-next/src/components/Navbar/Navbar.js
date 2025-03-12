import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import mef from "../../assets/logo.png";
import Link from "next/link";

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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="text-decoration-none" scroll>
                <p className="nav-link active " aria-current="page" href="#">
                  Anasayfa
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#latest" className="text-decoration-none">
                <p className="nav-link active " aria-current="page" href="#">
                  Son Yayımlananlar
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="text-decoration-none" scroll>
                <p className="nav-link active " aria-current="page" href="#">
                  Tüm Bloglar
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog/add" className="text-decoration-none" scroll>
                <p className="nav-link active " aria-current="page" href="#">
                  Post Ekle
                </p>
              </Link>
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
