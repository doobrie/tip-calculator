import React from "react";
import "./BillAmountInput.css";
import "./TipDisplay.css";

export default function BillAmountInput(props) {
  return (
    <div className="input-container">
      <span className="currency" />
      <input
        className="tip-input"
        name="totalCost"
        placeholder="Bill amount"
        onChange={props.handleChange}
      />
    </div>
  );
}
