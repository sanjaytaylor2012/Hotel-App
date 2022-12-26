import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCustomers } from "../contexts/customersContext";

// # df.columns = ['lead_time', 'arrival_date_month', 'stays_in_weekend_nights', 'stays_in_week_nights', 'adults',
// # 'children', 'babies', 'is_repeated_guest', 'previous_cancellations', 'previous_bookings_not_canceled',
// # 'booking_changes', 'required_car_parking_spaces', 'total_of_special_requests']

export function AddCustomerForm() {
  const { addCustomers } = useCustomers();
  const nameRef = useRef();

  const leadTimeRef = useRef();
  const arrivalMonthRef = useRef();
  const staysInWeekendNightRef = useRef();
  const staysInWeekNightRef = useRef();
  const adultsRef = useRef();
  const childrenRef = useRef();
  const babiesRef = useRef();
  const repeatGuestRef = useRef();
  const previousCancellationRef = useRef();
  const previousBookingsNotCanceledRef = useRef();
  const bookingChangesRef = useRef();
  const parkingSpotsRef = useRef();
  const specialRequestsRef = useRef();
  const [output, setOutput] = useState();

  async function Submit(event) {
    event.preventDefault();
    const answerForm = [
      leadTimeRef.current.value,
      arrivalMonthRef.current.value,
      staysInWeekendNightRef.current.value,
      staysInWeekNightRef.current.value,
      adultsRef.current.value,
      childrenRef.current.value,
      babiesRef.current.value,
      repeatGuestRef.current.value,
      previousCancellationRef.current.value,
      previousBookingsNotCanceledRef.current.value,
      bookingChangesRef.current.value,
      parkingSpotsRef.current.value,
      specialRequestsRef.current.value,
    ];

    let response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answerForm),
    })
      .then((response) => response.json())
      .then((data) => {
        return data["prediction"];
      });
    setOutput(response);

    addCustomers({
      name: nameRef.current.value,
      answers: answerForm,
      status: response,
    });
    nameRef.current.value = "";
    leadTimeRef.current.value = "";
    arrivalMonthRef.current.value = "";
    staysInWeekendNightRef.current.value = "";
    staysInWeekNightRef.current.value = "";
    adultsRef.current.value = "";
    childrenRef.current.value = "";
    babiesRef.current.value = "";
    repeatGuestRef.current.value = "";
    previousCancellationRef.current.value = "";
    previousBookingsNotCanceledRef.current.value = "";
    bookingChangesRef.current.value = "";
    parkingSpotsRef.current.value = "";
    specialRequestsRef.current.value = "";
  }

  return (
    <Form className="mt-4" onSubmit={Submit}>
      <Form.Group className="mb-3">
        <Form.Label>Customer name:</Form.Label>
        <Form.Control key={nameRef} ref={nameRef} type="text" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Days between booking and arrival:</Form.Label>
        <Form.Control
          ref={leadTimeRef}
          type="number"
          required
          min={0}
          step={1}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Arrival month:</Form.Label>
        <Form.Select ref={arrivalMonthRef} type="text" required>
          <option className="text-secondary">Select Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Weekend nights booked:</Form.Label>
        <Form.Control
          ref={staysInWeekendNightRef}
          type="number"
          required
          min={0}
          step={1}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Week nights booked:</Form.Label>
        <Form.Control
          ref={staysInWeekNightRef}
          type="number"
          required
          min={0}
          step={1}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Adults in party:</Form.Label>
        <Form.Control ref={adultsRef} type="number" required min={0} step={1} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Children in party:</Form.Label>
        <Form.Control
          ref={childrenRef}
          type="number"
          required
          min={0}
          step={1}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Babies in party:</Form.Label>
        <Form.Control ref={babiesRef} type="number" required min={0} step={1} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Repeat guest: </Form.Label>
        <Form.Select ref={repeatGuestRef} type="text" required>
          <option className="text-secondary">Select Option</option>
          <option>Yes</option>
          <option>No</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of previous cancellation: </Form.Label>
        <Form.Control
          ref={previousCancellationRef}
          type="number"
          required
          min={0}
          step={1}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of previous bookings not canceled:</Form.Label>
        <Form.Control
          ref={previousBookingsNotCanceledRef}
          type="number"
          required
          min={0}
          step={1}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of booking changes: </Form.Label>
        <Form.Control
          ref={bookingChangesRef}
          type="number"
          required
          min={0}
          step={1}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of required parking spots:</Form.Label>
        <Form.Control
          ref={parkingSpotsRef}
          type="number"
          required
          min={0}
          step={1}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of special requests: </Form.Label>
        <Form.Control
          ref={specialRequestsRef}
          type="number"
          required
          min={0}
          step={1}
        />
      </Form.Group>

      <Button className="mb-4" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
