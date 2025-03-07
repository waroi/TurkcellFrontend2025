import React, { useEffect } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSort, setFilter, fetchBooks } from "../redux/slice/booksSlice";
import { useNavigate } from "react-router";
import Button from "./Button";
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { sort, filter } = useSelector((state) => state.books);
    useEffect(() => {
        dispatch(fetchBooks({ sort, filter }));
    }, [sort, filter, dispatch]);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Library</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
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
                            onClick={() => dispatch(setSort(sort === "asc" ? "desc" : "asc"))}
                        >
                            {sort === "asc" ? "Z-A Sırala" : "A-Z Sırala"}
                        </button>
                    </div>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Kitap Ara"
                            aria-label="Search"
                            value={filter}
                            onChange={(e) => dispatch(setFilter(e.target.value))}
                        />
                        <button className="btn btn-outline-success" type="button" onClick={() => navigate("/signup")}>Kaydol</button>
                        <button className="btn btn-outline-success ms-2" type="button" onClick={() => navigate("/login")}>Giriş Yap</button>

                        <p> { }</p>
                    </form>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
