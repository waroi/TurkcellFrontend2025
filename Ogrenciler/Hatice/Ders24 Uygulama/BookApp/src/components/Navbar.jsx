import React from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { sortBooks, filterBooks } from "../redux/slice/booksSlice";
import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { sort, filter } = useSelector((state) => state.books);

    const consthandleLoginClick = () => { navigate("/signup"); };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Library</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Books</Link>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center w-100 align-items-center">
                        <Button />

                        <button
                            className="btn btn-primary ms-2 me-3"
                            onClick={() => dispatch(sortBooks(sort === "asc" ? "desc" : "asc"))}
                        >
                            {sort === "asc" ? "Z-A Sırala" : "A-Z Sırala"}
                        </button>
                    </div>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={filter}
                            onChange={(e) => dispatch(filterBooks(e.target.value))}
                        />

                        <button className="btn btn-outline-success" type="button" onClick={consthandleLoginClick}>Giriş Yap</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

