import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CustomersContext = React.createContext();

export function useCustomers() {
  return useContext(CustomersContext);
}

export const CustomersProvidor = ({ children }) => {
  const [customers, setCustomers] = useLocalStorage("customers", []);
  const [inventory, setInventory] = useLocalStorage("inventory", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function addCustomers({ answers, status, name }) {
    setCustomers((prevCustomers) => {
      return [...prevCustomers, { id: uuidV4(), answers, status, name }];
    });
  }

  function removeCustomer({ name }) {
    setCustomers((prevCustomers) => {
      return [...prevCustomers.filter((customer) => customer.name !== name)];
    });
  }

  function removeInventory({ name }) {
    setInventory((prevInventory) => {
      return [...prevInventory.filter((item) => item.name !== name)];
    });
  }

  function addInventory({ name, max }) {
    setInventory((prevInventory) => {
      return [...prevInventory, { id: uuidV4(), amount: 0, name, max }];
    });
  }

  function addExpense({ customer, amount, inventoryId }) {
    const item = inventory.find((item) => item.id === inventoryId);
    item.amount += amount;
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), customer, amount, inventoryId }];
    });
  }

  return (
    <CustomersContext.Provider
      value={{
        customers,
        addCustomers,
        inventory,
        addInventory,
        addExpense,
        removeCustomer,
        expenses,
        removeInventory,
      }}
    >
      {children}
    </CustomersContext.Provider>
  );
};
