import { register, login, logout } from "../firebase";

import modal from "../modal";
import library from "../library";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Navigation() {
  const { setModal } = modal();
  const { user } = library();

  return (
    <Navbar expand="lg" className="bg-secondary mb-5" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <h1 className="fs-3">Library</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {user ? (
              <Nav.Link
                onClick={() =>
                  setModal({
                    show: true,
                    mode: "logout",
                    action: logout,
                  })
                }
              >
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link
                  onClick={() =>
                    setModal({
                      show: true,
                      mode: "register",
                      action: register,
                    })
                  }
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  onClick={() =>
                    setModal({
                      show: true,
                      mode: "login",
                      action: login,
                    })
                  }
                >
                  Login
                </Nav.Link>
              </>
            )}
            <Nav.Link href="/">About Us</Nav.Link>
            <NavDropdown title="Services">
              <NavDropdown.Item href="/">Registration</NavDropdown.Item>
              <NavDropdown.Item href="/">Book Request</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
