import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink, useNavigate } from "react-router";
import { getCurrentUser, logOut } from "../controller/AuthController";
import { readUser } from "../controller/DBController";
import { useSelector } from "react-redux";

const NavbarView = ({ setEditingBookId }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  {
    /* dropdown kategorileri dinamik hale getirmek icin useSelector kullandim */
  }
  const books = useSelector((state) => state.book.books);
  const categories = [...new Set(books.map((book) => book.category))];

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    handleUser();
  }, []);
  const handleUser = async () => {
    const currentUser = getCurrentUser();
    if (currentUser !== null) {
      const user = await readUser(currentUser.uid);
      setUser(user);
    }
  };
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
      setUser(null);
    } catch (error) {
      console.log("Error in handleLogOut: ", error);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light position-sticky top-0 z-2 shadow-sm py-3">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Kitap Dünyası
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-white"
                aria-current="page"
                href="#"
                to="/"
              >
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#books">
                Kitaplar
              </a>
            </li>
            {/* Kategoriler */}
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kategoriler
              </a>
              <ul className="dropdown-menu">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <li key={category}>
                      <NavLink
                        className="dropdown-item"
                        to={`/kategori/${category}`}
                      >
                        {category}
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <li>
                    <span className="dropdown-item">Kategori yok</span>
                  </li>
                )}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                İletişim
              </a>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="avatar ms-2 me-2"></div>
              </a>
              {/*user vasrsa cikis yap yoksa login yap */}
              <ul className="dropdown-menu">
                {user ? (
                  <>
                    <li>
                      <span className="dropdown-item">{user.email}</span>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogOut}>
                        Çıkış Yap
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className="dropdown-item text-dark text-decoration-none"
                    >
                      Giriş Yap
                    </NavLink>
                  </li>
                )}
              </ul>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#bookEvent"
            onClick={() => setEditingBookId}
          >
            Kitap Ekle
          </button>
          <button
            className={`btn btn-secondary ms-3 ${
              theme === "light" ? "bg-dark text-light" : "bg-white text-dark"
            }`}
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙 Karanlık Mod" : "☀️ Aydınlık Mod"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
