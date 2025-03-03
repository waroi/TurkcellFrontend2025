import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <img
            src="https://img.icons8.com/?size=100&id=10itr2437PQG&format=png&color=000000"
            alt=""
          />
          TurkeysNews
        </NavLink>

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="home/genel">
                General
              </NavLink>
            </li> */}
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
