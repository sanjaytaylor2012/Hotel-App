import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomersProvidor } from "./contexts/customersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomersProvidor>
      <App />
    </CustomersProvidor>
  </React.StrictMode>
);
