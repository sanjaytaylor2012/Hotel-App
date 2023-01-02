import React, { useRef } from "react";
import { useCustomers } from "../contexts/customersContext";
import { Modal, Form, Button } from "react-bootstrap";

export function AddExpenseModal({ show, handleClose }) {
  const customerRef = useRef();
  const amountRef = useRef();
  const inventoryIdRef = useRef();

  const { inventory, addExpense, customers } = useCustomers();

  function handleSubmit(event) {
    event.preventDefault();
    const item = inventory.find(
      (item) => item.id === inventoryIdRef.current.value
    );
    addExpense({
      customer: customerRef.current.value,
      amount: parseFloat(amountRef.current.value),
      inventoryId: inventoryIdRef.current.value,
      inventoryName: item.name,
    });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Customer</Form.Label>

            <Form.Select ref={customerRef} required>
              <option variant="text-secondary">Select Customer</option>
              {customers &&
                customers.map((customer) => {
                  return (
                    <option key={customer.id} value={customer.name}>
                      {customer.name}
                    </option>
                  );
                })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Item</Form.Label>

            <Form.Select ref={inventoryIdRef} required>
              <option variant="text-secondary">Select Item</option>

              {inventory &&
                inventory.map((inventory) => {
                  return (
                    <option key={inventory.id} value={inventory.id}>
                      {inventory.name}
                    </option>
                  );
                })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Amount</Form.Label>
            <Form.Control ref={amountRef} type="number" required />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
