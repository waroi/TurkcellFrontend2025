import React from "react";
import Logo from "./Logo/Logo";
import Navlinks from "./NavLinks/Navlinks";
import Searchbar from "./Searchbar/Searchbar";
import UserLogin from "./UserLogin/UserLogin";

const Navbar = () => {
  return (
    <>
      <header className="shadow-sm">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Logo />
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Navlinks />
              <Searchbar />
              <UserLogin />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
