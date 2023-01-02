import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>H.O.T.E.L.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Add Customer</Nav.Link>
            <Nav.Link href="/customers">View Customers</Nav.Link>
            <Nav.Link href="/inventory">View Inventory</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
