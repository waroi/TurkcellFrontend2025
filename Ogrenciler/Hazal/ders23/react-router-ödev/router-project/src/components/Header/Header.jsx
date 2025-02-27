import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <img src="./assets/logo.png" alt="HoloWorld" height="50" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  );
}

export default Header;