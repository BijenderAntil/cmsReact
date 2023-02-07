import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComp() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Movies</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/movies">Movies</Nav.Link>
        <Nav.Link href="/movies/list">List Movies</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBarComp;