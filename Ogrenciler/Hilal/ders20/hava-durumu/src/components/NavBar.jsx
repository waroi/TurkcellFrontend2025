import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ setSearchValue, handleSearchButtonClick }) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Weather App</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by city name"
              className="ms-auto me-2"
              aria-label="Search"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button onClick={handleSearchButtonClick} variant="outline-success">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
