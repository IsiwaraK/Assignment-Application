import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/add">People</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/add">Add</Nav.Link>
          <Nav.Link href="/fetch">Entries</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
