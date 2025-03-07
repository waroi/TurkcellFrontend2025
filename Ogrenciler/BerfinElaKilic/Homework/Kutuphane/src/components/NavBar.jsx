import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/slices/bookSlice";
import AddModal from "./AddModal";
import { FaUser } from "react-icons/fa";
import { NavLink, useParams } from "react-router";
import { AiOutlineLogin } from "react-icons/ai";
import ScrollingText from "./ScrollingText";

const NavBar = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const handleAddBook = () => {
    dispatch(addBook());
  };

  return (
    <>
      <ScrollingText/>
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
          <div className="gap-3 d-flex align-items-center">
            {isAdmin ? (
              <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Yeni Kitap Ekle
              </button>
            ) : null}
            {isAdmin ? (
              <NavLink to="/" className="fs-3 text-danger">
                <AiOutlineLogin />
              </NavLink>
            ) : (
              <NavLink to="/login" className="fs-3 text-dark">
                <FaUser />
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <AddModal />
    </>
  );
};

export default NavBar;
