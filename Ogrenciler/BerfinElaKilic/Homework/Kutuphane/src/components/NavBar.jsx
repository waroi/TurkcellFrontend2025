import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/slices/bookSlice";
import AddModal from "./AddModal";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleAddBook = () => {
    dispatch(addBook());
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary mb-3">
        <div className="container d-flex justify-content-between">
          <a
            className="navbar-brand d-flex align-items-center fw-bold fs-3"
            href="#"
          >
            <img
              src="https://i.ibb.co/Cpd3M8vn/logoeeee.png"
              alt=""
              width="55"
              height="55"
              className="d-inline-block align-text-top"
            />
            Kitabevi
          </a>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            Yeni Kitap Ekle
          </button>
        </div>
      </nav>
      <AddModal />
    </>
  );
};

export default NavBar;
