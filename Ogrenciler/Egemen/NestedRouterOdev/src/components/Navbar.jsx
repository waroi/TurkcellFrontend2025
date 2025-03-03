import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid justify-content-between">
        <NavLink className="navbar-brand" to="/home">
          <img
            src="https://img.icons8.com/?size=50&id=10itr2437PQG&format=png&color=000000"
            alt=""
          />
          TurkeysNews
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myCustomNavbar"
          aria-controls="myCustomNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-4" id="myCustomNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="economy">
                Economy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="health">
                Health
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="sport">
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="magazine">
                Magazine
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
