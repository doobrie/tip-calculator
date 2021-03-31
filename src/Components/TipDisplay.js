import React from "react";
import "./TipDisplay.css";

function TipDisplay(props) {
  return (
    <div>
      {props.title}: <span className="currency" />
      <span className="tip-value">{!isNaN(props.value) && props.value}</span>
    </div>
  );
}

export default TipDisplay;
