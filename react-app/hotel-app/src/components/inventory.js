import React, { useState } from "react";
import { Button, Container, Stack, Table } from "react-bootstrap";
import { useCustomers } from "../contexts/customersContext";
import { AddExpenseModal } from "./AddExpenseModal";
import { AddInventoryModal } from "./addInventoryModal";
import { InventoryCard } from "./InventoryCard";
import { v4 as uuidV4 } from "uuid";

export function Inventory() {
  const [showAddInventoryModal, setShowAddInventoryModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const { inventory, expenses } = useCustomers();

  return (
    <Container>
      <Stack direction="horizontal" gap="2">
        <Button onClick={() => setShowAddInventoryModal(true)} className="mb-4">
          Add Item
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => setShowAddExpenseModal(true)}
          className="mb-4"
        >
          Add Customer Expense
        </Button>
      </Stack>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        {inventory.map((inventory) => {
          return (
            <InventoryCard
              key={inventory.id}
              name={inventory.name}
              amount={inventory.amount}
              max={inventory.max}
            />
          );
        })}
      </div>

      <div className="mt-4 text-center" style={{ width: 600 }}>
        <Table striped bordered="true" size="sm">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Amount</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              const item = inventory.find(
                (item) => item.id === expense.inventoryId
              );
              return (
                <tr>
                  <td key={uuidV4()}>{expense.customer}</td>
                  <td>{expense.amount}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <AddInventoryModal
        show={showAddInventoryModal}
        handleClose={() => setShowAddInventoryModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={() => setShowAddExpenseModal(false)}
      />
    </Container>
  );
}
