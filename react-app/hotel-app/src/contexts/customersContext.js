import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const CustomersContext = React.createContext();

export function useCustomers() {
  return useContext(CustomersContext);
}

export const CustomersProvidor = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  function addCustomers({ id, answers, status, name }) {
    setCustomers((prevCustomers) => {
      return [...prevCustomers, { id: uuidV4(), answers, status, name }];
    });
  }

  return (
    <CustomersContext.Provider
      value={{
        customers,
        addCustomers,
      }}
    >
      {children}
    </CustomersContext.Provider>
  );
};
