import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useCustomers } from "../contexts/customersContext";

export function AddInventoryModal({ show, handleClose }) {
  const { addInventory } = useCustomers();
  const nameRef = useRef();
  const amountRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    addInventory({
      name: nameRef.current.value,
      max: parseFloat(amountRef.current.value),
    });
    handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>

            <Form.Control className="mb-3" ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>

            <Form.Control
              className="mb-3"
              ref={amountRef}
              type="number"
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button type="submit">Submit</Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
