import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Gazette</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/news">All News</Nav.Link>
            <Nav.Link as={Link} to="/news/general">General</Nav.Link>
            <Nav.Link as={Link} to="/news/business">Business</Nav.Link>
            <Nav.Link as={Link} to="/news/health">Health</Nav.Link>
            <Nav.Link as={Link} to="/news/sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/news/tech">Tech</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;