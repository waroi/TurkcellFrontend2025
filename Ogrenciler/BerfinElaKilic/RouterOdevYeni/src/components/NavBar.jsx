import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fs-2 text-primary fw-bold" to="/">
          <i>KendimeHayat</i>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6 gap-4 ms-5 ">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-info"
                aria-current="page"
                to="/"
              >
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-info" to="/about">
                Hakkımızda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-info" to="/">
                {" "}
                Ürünler{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-info" to="/contact">
                İletişim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-info" to="/SSS">
                SSS
              </NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center gap-4 fs-5 text-info">
            <div>
              <i className="fa-regular fa-heart"></i>
            </div>
            <div>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div>
              <i className="fa-regular fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
