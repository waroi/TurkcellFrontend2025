import { NavLink } from "react-router";
import { signOut } from "../../../firebase/authControl";
import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../../redux/slices/buttonSlice";
const Navbar = () => {
  const button = useSelector((state) => state.button.button);
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut();
    dispatch(toggleButton());
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to={"/"} className="navbar-brand d-flex align-items-center">
          <img src="/cat.png" width={"70px"}></img>
          <h2 className="">Book</h2>
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
            <li className="nav-item">
              <NavLink
                to={"/"}
                className="nav-link active text-decoration-none"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <NavLink
              to="/login"
              className={`btn btn-blue card-btn ${
                button == "d-none" ? "d-flex" : "d-none"
              }`}
            >
              Login
            </NavLink>
            <NavLink
              to="/"
              className={`btn btn-outline-danger ${button}`}
              type="button"
              onClick={handleLogout}
            >
              Log Out
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
