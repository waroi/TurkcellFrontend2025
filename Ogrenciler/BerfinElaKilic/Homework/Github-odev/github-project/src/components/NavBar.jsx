import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function NavBar({ handleChange, userName }) {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    handleChange(searchValue);
  };

  useEffect(() => {
    searchInputRef.current?.focus();
  }, [])


  return (
    <Navbar expand="lg" className="border-subtle border-bottom">
      <Container fluid>
        <Navbar.Brand href="#">
          <FaGithub className="fs-1 text-white" /> <span className="text-white ms-2">{userName}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control
              type="search"
              ref={searchInputRef}
              placeholder="Search"
              className="me-2 bg-transparent border-subtle border-secondary text-white"
              aria-label="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <Button type="submit" variant="outline-secondary">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
