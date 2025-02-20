import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand href="#home">BLOGG</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
