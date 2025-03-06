import { useContext,useState,useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink, useNavigate } from "react-router";
import { getCurrentUser, logOut,} from "../controller/AuthController";
import { readUser } from "../controller/DBController";
const NavbarView = ({ setEditingBookId }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, setUser] = useState(null);
  const navigate =  useNavigate();
  useEffect(() => {
    handleUser();
  }, []);
  const handleUser = async () => {
    const currentUser = getCurrentUser();
    if (currentUser !== null) {
      const user = await readUser(currentUser.uid);
      setUser(user);
    }
  }
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
      setUser(null);
    } catch (error) {
      console.log("Error in handleLogOut: ", error);
    }
  }
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
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Anasayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#books">
                Kitaplar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                İletişim
              </a>
            </li>
          </ul>
          <li class="nav-item dropdown text-decoration-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="avatar ms-2 me-2"></div>
            </a>
            <ul class="dropdown-menu">
              <li>
                {user !== null ? (
                 <div>
                   <a class="dropdown-item" href="#">
                    {user.email}
                  </a>
                  <a class="dropdown-item" href="#" onClick={handleLogOut}>
                    Çıkış Yap
                  </a>
                 </div>
                ) : (
                  <NavLink to="/login" className="dropdown-item text-dark text-decoration-none">
                    Giriş Yap
                  </NavLink>
                )}
              </li>
            </ul>
          </li>
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
