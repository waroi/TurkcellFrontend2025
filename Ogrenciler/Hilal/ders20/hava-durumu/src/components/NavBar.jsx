import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand='lg' className='weather-navbar'>
      <Container>
        <Navbar.Brand
          href='#'
          className='d-flex align-items-center navbar-dark'
        >
          <i className='bi bi-cloud-sun fs-3 me-2'></i>
          <span className='fs-4'>Weather App</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
