import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import Musics from './components/Musics'

function App() {
  
  return (
    <>
       <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Music Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#music">Music</Nav.Link>  
          </Nav>
        </Container>
      </Navbar> 
      <Container>
      <Musics />
      </Container> 
    </>
  )
}

export default App
