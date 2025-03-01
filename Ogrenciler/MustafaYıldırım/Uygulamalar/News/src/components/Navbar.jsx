import { NavLink } from "react-router";
import logo from "../assets/HHM LOGO.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="HHM logo" width="60" height="24" />
        </NavLink>
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
              <NavLink className="nav-link" to="/">
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news">
                Haberler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news/sport">
                Spor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news/economy">
                Ekonomi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news/technology">
                Teknoloji
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
