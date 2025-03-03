import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          News
        </Link>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Anasayfa
              </Link>
            </li>
            {isHomePage ? (
              <li className="nav-item">
                <Link className="nav-link" to="/haberler">
                  Haberler
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/haberler/spor">
                    Spor Haberleri
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/haberler/ekonomi">
                    Ekonomi Haberleri
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/haberler/tech">
                    Teknoloji Haberleri
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/haberler/health">
                    Sağlık Haberleri
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
