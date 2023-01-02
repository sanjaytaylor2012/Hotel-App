import React, { useState } from "react";
import { Button, Container, Stack, Table } from "react-bootstrap";
import { useCustomers } from "../contexts/customersContext";
import { AddExpenseModal } from "./AddExpenseModal";
import { AddInventoryModal } from "./addInventoryModal";
import { InventoryCard } from "./InventoryCard";
import { v4 as uuidV4 } from "uuid";
import { RemoveInventoryModal } from "./RemoveInventoryModal";

export function Inventory() {
  const [showAddInventoryModal, setShowAddInventoryModal] = useState(false);
  const [showRemoveInventoryModal, setShowRemoveInventoryModal] =
    useState(false);

  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const { inventory, expenses, removeExpense } = useCustomers();

  function handleRemoveExpenseSubmit({ id, amount, inventoryId }) {
    console.log(id);
    removeExpense({ id: id, amount: amount, inventoryId: inventoryId });
  }

  return (
    <Container>
      <Stack direction="horizontal" gap="2" className="mt-4">
        <Button onClick={() => setShowAddInventoryModal(true)} className="mb-4">
          Add Item
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => setShowRemoveInventoryModal(true)}
          className="mb-4"
        >
          Remove Item
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
              <th>Remove Expense</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              return (
                <tr>
                  <td key={uuidV4()}>{expense.customer}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.inventoryName}</td>
                  <td
                    onClick={() => {
                      handleRemoveExpenseSubmit({
                        id: expense.id,
                        amount: expense.amount,
                        inventoryId: expense.inventoryId,
                      });
                    }}
                  >
                    <Button>Remove Expense</Button>
                  </td>
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

      <RemoveInventoryModal
        show={showRemoveInventoryModal}
        handleClose={() => setShowRemoveInventoryModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={() => setShowAddExpenseModal(false)}
      />
    </Container>
  );
}
