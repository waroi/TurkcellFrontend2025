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
  const [userRole, setUserRole] = useState(null);
  let navigate = useNavigate();

  const handleRegister = async () => {
    await registerWithGoogle();
    const user = await getUser(auth.currentUser.uid);
    setUserRole(user.role);
    user.role === "admin" ? navigate("/applications") : navigate("/form");
  };

  useEffect(() => {
    unsubscribe(setUserAuth);
  }, []);

  useEffect(() => {
    if (userAuth) {
      const fetchUserRole = async () => {
        const user = await getUser(auth.currentUser.uid);
        setUserRole(user.role);
      };
      fetchUserRole();
    }
  }, [userAuth]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg lg-body-teritary bg-blue ">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src="https://cdn.dribbble.com/users/2286676/screenshots/6851910/applima_4x.jpg?resize=230x60"
              alt="logo"
            />
          </div>

          {userAuth ? (
            <div className="container d-flex justify-content-end gap-2">
              <NavLink to="/applications">
                <Button className="btn bg-cream rounded-pill text-dark">
                  Başvurular
                </Button>
              </NavLink>

              {userRole === "user" && (
                <NavLink
                  to="/form"
                  className="btn bg-cream rounded-pill"
                  onClick={() => getUserApplications()}
                >
                  Yeni Başvuru
                </NavLink>
              )}

              <NavLink
                to="/"
                className="btn bg-cream rounded-pill"
                onClick={signOut}
              >
                Çıkış
              </NavLink>
            </div>
          ) : (
            <Button
              className="btn bg-cream rounded-pill"
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
