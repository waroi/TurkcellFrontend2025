import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';

function NavBar({ setSearchValue, handleSearchButtonClick, search }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchButtonClick();
  };

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
        <Form onSubmit={handleSubmit} className='d-flex ms-auto'>
          <InputGroup>
            <Form.Control
              className='search-input'
              type='search'
              placeholder='Search by city name'
              aria-label='Search'
              value={search}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
              }}
            />
            <Button
              variant='success'
              onClick={handleSearchButtonClick}
              type='submit'
              style={{}}
            >
              <span>Search</span>
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
