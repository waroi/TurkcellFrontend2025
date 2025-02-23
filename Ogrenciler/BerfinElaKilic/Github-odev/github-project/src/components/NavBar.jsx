import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaGithub } from "react-icons/fa";
import {useState} from 'react';
function NavBar({handleChange}) {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(searchValue); 
  }
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#"><FaGithub className="fs-1 text-white"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchValue(e.target.value.trim())}  
              value={searchValue}
            />
            <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
