import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

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
