import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ButtonStyled } from "./ButtonStyle";
import { StyledInput, StyledForm } from "./InputStyle";

const NavBar = ({ movieName, setMovieName, getMovies, getActor }) => {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container fluid className="justify-content-center">
        <Nav className="me-auto d-flex align-items-center justify-content-around w-100">
          <Navbar.Brand href="#home">
            <img
              src="https://img.icons8.com/?size=100&id=12246&format=png&color=000000"
              alt=""
            />
          </Navbar.Brand>
          <StyledForm className="w-50">
            <StyledInput
              placeholder="Lütfen film ismi veya oyuncu ismi giriniz.."
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setMovieName(e.target.value)}
              value={movieName}
              id="movieName"
            />
          </StyledForm>
          <ButtonGroup aria-label="our-button">
            <ButtonStyled
              variant="warning"
              className="me-3"
              onClick={getMovies}
            >
              Film Ara
            </ButtonStyled>
            <ButtonStyled variant="warning" onClick={getActor}>
              Actor Ara
            </ButtonStyled>
          </ButtonGroup>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
