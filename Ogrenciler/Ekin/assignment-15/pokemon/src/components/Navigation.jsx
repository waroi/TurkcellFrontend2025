import { NavLink } from "react-router";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar
      bg="primary"
      className="position-fixed w-100 py-2 z-3 border-bottom border-2 border-secondary"
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <Image src="/logo.webp" fluid />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto mt-lg-0 mt-4">
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-secondary text-uppercase fw-bold"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#pokemons"
              className="text-secondary text-uppercase fw-bold"
            >
              Pokemons
            </Nav.Link>
            <Nav.Link
              href="#about-us"
              className="text-secondary text-uppercase fw-bold"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#faq"
              className="text-secondary text-uppercase fw-bold"
            >
              FAQ
            </Nav.Link>
            <Nav.Link href="" className="text-secondary text-uppercase fw-bold">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
