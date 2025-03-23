import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router";

function NavBar() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logout(); // Çıkış işlemini gerçekleştir
  };
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">İK PORTAL</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {user.firstName}
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item as={NavLink} to={`/user/${user.id}`}>
                  Profil
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button as={NavLink} to="/login" variant="primary">
              Giriş Yap
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
