import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const CustomersContext = React.createContext();

export function useCustomers() {
  return useContext(CustomersContext);
}

export const CustomersProvidor = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [expenses, setExpenses] = useState([]);

  function addCustomers({ answers, status, name }) {
    setCustomers((prevCustomers) => {
      return [...prevCustomers, { id: uuidV4(), answers, status, name }];
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
        expenses,
      }}
    >
      {children}
    </CustomersContext.Provider>
  );
};
