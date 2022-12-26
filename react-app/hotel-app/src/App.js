import { Stack, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { AddCustomerForm } from "./components/AddCustomerForm";
import { ViewCustomers } from "./components/viewCustomers";

function App() {
  const [addCustomer, setAddCustomer] = useState(true);
  const [viewCustomers, setViewCustomer] = useState(false);
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="4" className="mb-4">
          {/* hospitality online ticketing evaluation and logistics */}
          <h1>H.O.T.E.L.</h1>
          <Button
            variant={addCustomer ? "outline-primary" : "primary"}
            onClick={() => {
              setAddCustomer(true);
              setViewCustomer(false);
            }}
          >
            Add Customer
          </Button>
          <Button
            variant={viewCustomers ? "outline-primary" : "primary"}
            onClick={() => {
              setAddCustomer(false);
              setViewCustomer(true);
            }}
          >
            View Customers
          </Button>
        </Stack>
        {addCustomer && <AddCustomerForm />}
        {viewCustomers && <ViewCustomers />}
      </Container>
    </>
  );
}

export default App;
