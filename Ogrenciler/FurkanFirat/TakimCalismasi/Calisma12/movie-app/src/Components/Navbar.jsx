import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand>Filmler</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;