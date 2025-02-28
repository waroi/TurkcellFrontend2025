import React from "react";

export default Navigation = ({ setSearch }) => {
  return (
    <div className="container p-4">
      <nav className="navbar navbar-expand-lg bg-light rounded-5 px-4 py-3 d-flex justify-content-between">

        <a className="navbar-brand fs-3 text-primary">Movie<strong>Box</strong></a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <form
          className="d-flex"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className="form-control rounded-pill border-1 border-secondary me-2 search-input"
            type="search"
            placeholder="Search"
            onKeyDown={(event) =>
              event.key == "Enter" ? setSearch(event.target.value) : ""
            }
          />
        </form>
            </li>
          </ul>
        </div>

    </nav>
    </div>
  );
};
