import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Appbar() {
  return (
    <Navbar className='navbar navbar-dark bg-dark position-sticky'>
      <Container>
        <Navbar.Brand className='text-white'>Filmler</Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}

export default Appbar;
