import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomersProvidor } from "./contexts/customersContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddCustomerForm } from "./components/AddCustomerForm";
import { ViewCustomers } from "./components/viewCustomers";
import { Inventory } from "./components/inventory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CustomersProvidor>
      <App />
      <Routes>
        <Route path="/" element={<AddCustomerForm />} />
        <Route path="/customers" element={<ViewCustomers />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </CustomersProvidor>
  </BrowserRouter>
);
