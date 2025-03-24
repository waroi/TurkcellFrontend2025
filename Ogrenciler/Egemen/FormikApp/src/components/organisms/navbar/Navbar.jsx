import { useEffect, useState } from "react";
import { unsubscribe } from "../../../../services/authServices";
import { registerWithGoogle, signOut } from "../../../../firebase/authControl";
import Button from "../../atoms/buttons/Button";
import { getUser } from "../../../../firebase/dbController";
import { auth } from "../../../../firebase/firebase";
import { NavLink, useNavigate } from "react-router";
import { getUserApplications } from "../../../../firebase/dbController";
const Navbar = () => {
  const [userAuth, setUserAuth] = useState(null);
  let navigate = useNavigate();

  const handleRegister = async () => {
    await registerWithGoogle();
    const user = await getUser(auth.currentUser.uid);
    user.role === "admin" ? navigate("/applications") : navigate("/form");
  };

  useEffect(() => {
    unsubscribe(setUserAuth);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg lg-body-teritary bg-primary">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src="https://cdn.dribbble.com/users/2286676/screenshots/6851910/applima_4x.jpg?resize=230x60"
              alt="logo"
            />
          </div>

          {userAuth ? (
            <>
              <div className="container d-flex justify-content-end gap-2">
                <NavLink
                  to="/applications"
                  className="btn btn-warning rounded-pill "
                >
                  Başvurular
                </NavLink>
                <NavLink
                  to="/form"
                  className="btn btn-warning rounded-pill "
                  onClick={getUserApplications()}
                >
                  Yeni Başvuru
                </NavLink>
                <NavLink
                  to="/"
                  className="btn btn-danger rounded-pill"
                  onClick={signOut}
                >
                  Çıkış
                </NavLink>
              </div>
            </>
          ) : (
            <Button
              className="btn btn-warning rounded-pill"
              href="/userPage"
              onClick={() => handleRegister()}
            >
              Giriş
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
