import { useAuth } from "../hooks/useAuth";
import Link from "next/link";
import useThemeStore from "../store/useThemeStore";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">Trendora</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">Anasayfa</Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" href="/dashboard">Hesabım</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={logoutUser}>Çıkış Yap</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">Giriş Yap</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/register">Kayıt Ol</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <button className="btn btn-outline-light ms-3" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
