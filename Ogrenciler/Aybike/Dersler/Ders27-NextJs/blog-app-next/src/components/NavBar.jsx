import React from "react";
import Link from "next/link";
import AddNewsModal from "./AddModal";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img
              src="logo.png"
              alt="Logo"
              width={40}
              height={30}
              className="d-inline-block align-text-top mx-3"
            />
            Gossip Team
          </Link>{" "}
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
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-5">
          <button
            className="btn btn-dark custom-button"
            data-bs-toggle="modal"
            data-bs-target="#addNewsModal"
          >
            Yazı Ekle
          </button>
        </div>
        <AddNewsModal />
      </nav>
    </>
  );
};

export default NavBar;
