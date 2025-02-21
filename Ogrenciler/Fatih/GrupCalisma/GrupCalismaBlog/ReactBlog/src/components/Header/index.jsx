import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

function Header({ setSearchTerm }) {
  return (
    <Navbar expand='lg' className='navbar-custom px-3'>
      <Container>
        <Navbar.Brand href='#' className='brand-logo'>UFC Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Form className='d-flex ms-auto' onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type='search'
              placeholder='Ara'
              className='me-2 search-box'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant='outline-light'>Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
