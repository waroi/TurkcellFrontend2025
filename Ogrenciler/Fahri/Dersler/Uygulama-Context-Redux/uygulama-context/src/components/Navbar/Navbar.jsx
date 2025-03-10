import { NavLink } from "react-router";
import { signOut } from "../../../firebase/authControl";
import { useDispatch, useSelector } from "react-redux";
import { setButton } from "../../redux/slices/buttonSlice";
import { setCardButton } from "../../redux/slices/cardButtonSlice";
import { getUser } from "../../../firebase/dbController";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase";
const Navbar = () => {
  const button = useSelector((state) => state.button.button);
  const dispatch = useDispatch();
  const [userRole, setUserRole] = useState(null);
  const [userAuth, setUserAuth] = useState();

  useEffect(() => {
    const userRole = async () => {
      const data = await getUser();
      if (data) {
        dispatch(setUserRole(data.role));
      }
    };
    userRole();
  }, [auth.currentUser]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUserAuth(userAuth);
        dispatch(setButton("d-block"));
        console.log("block--");
      } else {
        setUserAuth(null);
        dispatch(setButton("d-none"));
        console.log("none--");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut();
    dispatch(setButton("d-none"));
    dispatch(setCardButton("d-none"));
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink
          to={"/"}
          className="navbar-brand d-flex align-items-center"
          onClick={() => dispatch(setCardButton("d-none"))}
        >
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
                onClick={() => dispatch(setCardButton("d-none"))}
              >
                Home
              </NavLink>
            </li>
            {userRole == "admin" ? (
              <li className="nav-item">
                <NavLink
                  to={"/admin"}
                  className="nav-link active text-decoration-none"
                  onClick={() => dispatch(setCardButton("d-block"))}
                >
                  Admin
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  to={"/editor"}
                  className="nav-link active text-decoration-none"
                  onClick={() => dispatch(setCardButton("d-block"))}
                >
                  Editor
                </NavLink>
              </li>
            )}
          </ul>
          <form className="d-flex" role="search">
            <NavLink
              to="/login"
              className={`btn btn-blue card-btn ${button == "d-none" ? "d-flex" : "d-none"
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
