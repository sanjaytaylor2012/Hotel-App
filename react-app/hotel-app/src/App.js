import { Stack, Container, Button, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { AddCustomerForm } from "./components/AddCustomerForm";
import { ViewCustomers } from "./components/viewCustomers";
import { Inventory } from "./components/inventory";

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

// const [addCustomer, setAddCustomer] = useState(true);
// const [viewCustomers, setViewCustomer] = useState(false);
// const [inventory, setInventory] = useState(false);

// {/* <Container className="my-4">
// <Stack direction="horizontal" gap="4" className="mb-4">
//   {/* hospitality online ticketing evaluation and logistics */}
//   <h1>H.O.T.E.L.</h1>
//   <Button
//     variant={addCustomer ? "outline-primary" : "primary"}
//     onClick={() => {
//       setAddCustomer(true);
//       setViewCustomer(false);
//       setInventory(false);
//     }}
//   >
//     Add Customer
//   </Button>
//   <Button
//     variant={viewCustomers ? "outline-primary" : "primary"}
//     onClick={() => {
//       setAddCustomer(false);
//       setViewCustomer(true);
//       setInventory(false);
//     }}
//   >
//     View Customers
//   </Button>
//   <Button
//     variant={inventory ? "outline-primary" : "primary"}
//     onClick={() => {
//       setAddCustomer(false);
//       setViewCustomer(false);
//       setInventory(true);
//     }}
//   >
//     View Inventory
//   </Button>
// </Stack>
// {addCustomer && <AddCustomerForm />}
// {viewCustomers && <ViewCustomers />}
// {inventory && <Inventory />}
// </Container> */}
