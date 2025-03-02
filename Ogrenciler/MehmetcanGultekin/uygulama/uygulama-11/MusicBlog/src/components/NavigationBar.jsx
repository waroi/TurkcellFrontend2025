import { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import AddMusicModal from './AddMusicModal';

function NavigationBar({ refreshMusics }) {
  const [showModal, setShowModal] = useState(false);
  
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand href="#home">Music Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#music">Music</Nav.Link>  
          </Nav>
          <Button variant="success" onClick={handleShow}>
            Add Music
          </Button>
        </Container>
      </Navbar>
      
      <AddMusicModal 
        show={showModal} 
        handleClose={handleClose} 
        refreshMusics={refreshMusics}
      />
    </>
  );
}

export default NavigationBar;