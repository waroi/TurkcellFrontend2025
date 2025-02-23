import H1 from "../atoms/h1";
import SearchForm from "../molecules/SearchForm";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import AddModal from "../molecules/AddModal";

const Header = ({ category, setCategory, setTrigger }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border-bottom border-dark">
      <Container>
        <Navbar.Brand href="#">
          <H1 />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <SearchForm
              category={category}
              setCategory={setCategory}
            ></SearchForm>
            <AddModal setTrigger={setTrigger}></AddModal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
