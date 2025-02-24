import React from "react";
import { Button } from "react-bootstrap"; 

const Navbar = ({ userSearch, setUserSearch, handleSearchSubmit }) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GitHub</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Kullanıcı Ara..."
            aria-label="Search"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
          <Button variant="primary" onClick={handleSearchSubmit}>
            Ara
          </Button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
