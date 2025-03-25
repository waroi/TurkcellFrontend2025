import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import SecondaryButton from "../atoms/Buttons/SecondaryButton";

function NavBar() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logout();
  };
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <Navbar className="bg-transparent text-light">
      <Container>
        <Navbar.Brand className="text-light fw-bold" href="#home">
          İK PORTAL
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {user.firstName}
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {user?.role === "admin" ? (
                  <Dropdown.Item as={NavLink} to={`/admin/${user.id}`}>
                    Profil
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item as={NavLink} to={`/user/${user.id}`}>
                    Profil
                  </Dropdown.Item>
                )}
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <SecondaryButton
              as={NavLink}
              to="/login"
              className="bg-transparent"
            >
              Giriş Yap
            </SecondaryButton>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
