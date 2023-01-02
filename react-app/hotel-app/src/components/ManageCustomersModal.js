import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useCustomers } from "../contexts/customersContext";

export function ManageCustomersModal({ show, handleClose }) {
  const { customers, removeCustomer } = useCustomers();
  const customerRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    removeCustomer({ name: customerRef.current.value });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Manage Customers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Customers</Form.Label>
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
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Remove
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
