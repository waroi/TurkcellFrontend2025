import React, { useState, useEffect } from "react";
import blog from "../assets/blog.png";
import PostModal from "./PostModal";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <nav className="navbar p-3 navbar-expand-lg bg-info">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={blog} alt="" className="img-fluid nav-blog-img" />
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
            <li className="nav-item me-2">
              <a className="nav-link active" href="#pop-blog">
                Popüler Blog
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" href="#op-bar">
                Filtrele/Ara
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" href="#articles">
                Bloglar
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary rounded-pill"
                onClick={openModal}
              >
                Yeni Yazı Ekle
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && <PostModal isOpen={isOpen} onClose={closeModal} />}
    </nav>
  );
};

export default CustomNavbar;
