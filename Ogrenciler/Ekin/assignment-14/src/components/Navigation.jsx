import React from "react";

export default Navigation = ({ setSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-4">
      <div className="container">
        <a className="navbar-brand">MovieBox</a>
        <form
          className="d-flex"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className="form-control rounded-pill me-2"
            type="search"
            placeholder="Search"
            // onInput={(event) => setSearch(event.target.value)}
            onKeyDown={(event) =>
              event.key == "Enter" ? setSearch(event.target.value) : ""
            }
          />
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
