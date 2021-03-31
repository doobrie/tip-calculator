import React from "react";
import "./TipPercentageSlider.css";

export default function TipPercentageSlider(props) {
  return (
    <div className="tip-container">
      <div className="tip-container-label">Tip:</div>
      <div className="tip-container-slider">
        <input
          type="range"
          min="1"
          max="100"
          value={props.tipPercent}
          onChange={props.handleChange}
          className="slider"
        />
      </div>
      <div className="tip-container-value">{props.tipPercent}</div>
    </div>
  );
}
