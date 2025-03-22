import { NavLink } from "react-router";
import useUserStore from "../store/useStore";
import useAuth from "../hooks/useAuth";
import Button from "./inputs/Button";

export default function Navigation() {
  const { user } = useUserStore();
  const { logout } = useAuth();

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary py-3"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Application
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/application">
                    Application
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user">
                    User
                  </NavLink>
                </li>
                {user.isAdmin && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">
                      Admin
                    </NavLink>
                  </li>
                )}

                <li className="nav-item">
                  <button className="nav-link" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
