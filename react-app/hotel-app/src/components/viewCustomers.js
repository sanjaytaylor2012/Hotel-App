import React from "react";
import { Table } from "react-bootstrap";
import { useCustomers } from "../contexts/customersContext";

// # df.columns = ['lead_time', 'arrival_date_month', 'stays_in_weekend_nights', 'stays_in_week_nights', 'adults',
// # 'children', 'babies', 'is_repeated_guest', 'previous_cancellations', 'previous_bookings_not_canceled',
// # 'booking_changes', 'required_car_parking_spaces', 'total_of_special_requests']

export function ViewCustomers() {
  const { customers } = useCustomers();
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Lead Time</th>
          <th>Arrival Month</th>
          <th>Stays in Weekend Night</th>
          <th>Stays in Week Night</th>
          <th>Adults in Party</th>
          <th>Children in Party</th>
          <th>Babies in Party</th>
          <th>Repeat Guest</th>
          <th>Previous Cancellation(s)</th>
          <th>Previous Bookings not Cancellation</th>
          <th>Booking Changes</th>
          <th>Required Parking Spots</th>
          <th>Special Requests</th>
          <th>Predicted Status</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => {
          return (
            <tr>
              <td key={customer.id}>{customer.name}</td>
              {customer.answers.map((answer) => {
                return <td>{answer}</td>;
              })}
              <td>{customer.status}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}