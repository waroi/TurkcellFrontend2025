import { useState } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";

const NavBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchSubmit = () => {
        if (searchTerm.trim() === "") {
            fetchMovies(); 
        } else {
            onSearch(searchTerm); 
        }
        setSearchTerm(""); 
    };
    

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="#">HdFilmCehennemi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="d-flex ms-auto" onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }}>
                        <FormControl
                            type="search"
                            placeholder="Film Ara..."
                            className="me-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="outline-light" type="submit">Ara</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
