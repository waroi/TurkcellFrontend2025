import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";

import {
  filterBooks,
  sortBooksByDate,
  sortBooksByStringAZ,
  sortBooksByStringZA,
  clearFilters,
} from "../redux/slices/FilteredBookSlice";
import Modal from "./Modal";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
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

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
  return (
    <>
      <nav className="navbar navbr navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand w-25" href="#">
            <img src="../../bookify.png" className="w-75 img-fluid" alt="" />
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
            className="collapse navbar-collapse d-flex w-100 justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
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
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                    // onClick={() => handleFilterBook("title")}
                    >
                      Kategoriye Göre
                    </button>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2 rounded-pill"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success rounded-pill"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>
              <li>
                <button
                  onClick={handleOpen}
                >ekle</button>
                <Modal isOpen={open} onClose={handleClose}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
