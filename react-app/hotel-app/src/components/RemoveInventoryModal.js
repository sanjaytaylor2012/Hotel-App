import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useCustomers } from "../contexts/customersContext";

export function RemoveInventoryModal({ show, handleClose }) {
  const { inventory, removeInventory } = useCustomers();
  const inventoryRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    removeInventory({ name: inventoryRef.current.value });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Manage Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Items</Form.Label>
            <Form.Select ref={inventoryRef} required>
              <option variant="text-secondary">Select Item</option>
              {inventory &&
                inventory.map((item) => {
                  return (
                    <option key={item.id} value={item.name}>
                      {item.name}
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
