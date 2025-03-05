import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NavbarView = ({ setEditingBookId }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light position-sticky top-0 z-2 shadow-sm py-3">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Kitap Dünyası
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Anasayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#books">
                Kitaplar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                İletişim
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#bookEvent"
            onClick={() => setEditingBookId}
          >
            Kitap Ekle
          </button>
          <button
            className={`btn btn-secondary ms-3 ${
              theme === "light" ? "bg-dark text-light" : "bg-white text-dark"
            }`}
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙 Karanlık Mod" : "☀️ Aydınlık Mod"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
