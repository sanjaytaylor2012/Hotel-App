import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

export function InventoryCard({ name, amount, max }) {
  const classNames = [];
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10"); //checks first for if there should be a red background
  }

  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d- flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {amount}
            {max && <span className="text-muted fs-6 ms-1">/ {max}</span>}
          </div>
        </Card.Title>
        <ProgressBar
          className="rounded-pill"
          variant={getProgressBarVariant(amount, max)}
          min={0}
          max={max}
          now={amount}
        ></ProgressBar>
      </Card.Body>
    </Card>
  );
}

function getProgressBarVariant(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) return "primary"; // returning different variants to allow progress bar to change
  if (ratio < 0.75) return "warning"; // these primary, warning, and danger names are built into bootstrap and change the color
  return "danger";
}
