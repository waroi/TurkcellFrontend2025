import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBooks, sortBooks } from '../redux/slice/booksSlice';
import Button from './Button';

const Navbar = () => {
    const dispatch = useDispatch();
    const sort = useSelector((state) => state.books.sort);

    const handleSearch = (event) => {
        dispatch(filterBooks(event.target.value)); 
    };

    const handleSort = () => {
        dispatch(sortBooks(sort === "asc" ? "desc" : "asc")); 
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Books</a>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center w-100">
                        <Button />
                    </div>

                    <form className="d-flex align-items-center" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleSearch} 
                        />
                    </form>
                    <button
                        className="btn btn-primary ms-2 text-nowrap px-2 py-1"
                        type="button"
                        style={{ fontSize: "0.875rem", minWidth: "100px" }} 
                        onClick={handleSort}
                    >
                        {sort === "asc" ? "Z-A Sırala" : "A-Z Sırala"}
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
