import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";

import {
  filterBooks,
  sortBooksByDate,
  sortBooksByStringAZ,
  sortBooksByStringZA,
  clearFilters,
  searchBooks,
} from "../redux/slices/bookSlice";
import { useNavigate } from "react-router";
import Modal from "./Modal";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const booksFromStore = useSelector((state) => state.book.books);

  const dispatch = useDispatch();
  const handleFilterBook = (category) => dispatch(filterBooks(category));
  const handleClearFilters = () => dispatch(clearFilters());
  const handleSortbyStringAZ = (sortParameter) =>
    dispatch(sortBooksByStringAZ(sortParameter));
  const handleSortbyStringZA = (sortParameter) =>
    dispatch(sortBooksByStringZA(sortParameter));
  const handleSortbyDate = (created_at) =>
    dispatch(sortBooksByDate(created_at));
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchBooks(searchTerm));
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbr navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand w-25" href="#">
            <img
              src="../../bookify-new.png"
              className="w-75 img-fluid"
              alt=""
            />
          </a>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sırala
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSortbyStringAZ("title")}
                    >
                      A-Z
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSortbyStringZA("title")}
                    >
                      Z-A
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSortbyDate("created_at")}
                    >
                      Son Çıkan Kitaplar
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filtrele
                </a>

                <ul className="dropdown-menu mb-2">
                  {booksFromStore
                    ?.reduce((currentCats, book) => {
                      if (!currentCats.includes(book.category)) {
                        currentCats.push(book.category);
                      }
                      return currentCats;
                    }, [])
                    .map((category, index) => (
                      <li key={index}>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            handleFilterBook(category);
                          }}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleClearFilters}
                    >
                      Temizle
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <form className="d-flex" role="search">
                  <input
                    className="form-control mb-2 me-2 rounded-pill"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    defaultValue={searchTerm || ""}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      if (e.target.value === "") {
                        dispatch(clearFilters());
                      }
                    }}
                  />
                  <button
                    className="btn btn-light rounded-pill"
                    onClick={(e) => handleSearch(e)}
                  >
                    Search
                  </button>
                </form>
              </li>
              <li>
                <button
                  onClick={handleOpen}
                  className="btn btn-dark rounded-pill ms-2 p-2"
                >
                  Kitap Ekle
                </button>
                <Modal isOpen={open} onClose={handleClose} />
              </li>
              <li>
                <button
                  className="btn btn-danger rounded-pill ms-2 p-2"
                  onClick={() => navigate("/")}
                >
                  Çıkış Yap
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
