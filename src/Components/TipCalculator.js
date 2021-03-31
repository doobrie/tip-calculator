import React, { useState, useEffect } from "react";
import TipDisplay from "./TipDisplay";
import "./TipCalculator.css";

function TipCalculator() {
  const [billAmount, setBillAmount] = useState(0.0);
  const [tipPercent, setTipPercent] = useState(20);
  const [tipAmount, setTipAmount] = useState(0.0);
  const [total, setTotal] = useState(0.0);

  const calculateBill = () => {
    let ta = (tipPercent * billAmount) / 100.0;
    setTipAmount(ta.toFixed(2));
    setTotal((ta + parseFloat(billAmount)).toFixed(2));
  };

  useEffect(calculateBill, [billAmount, tipAmount, tipPercent]);

  const handleBillAmountChange = (e) => {
    const ba = parseFloat(e.target.value);
    setBillAmount(ba.toFixed(2));
  };

  const handleChangeTipPercent = (e) => {
    const tip = parseFloat(e.target.value);
    setTipPercent(tip.toFixed(2));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="header-component">Tip Calculator</h1>
        <div>
          <form>
            <div className="input-container">
              <span className="currency" />
              <input
                className="tip-input"
                name="totalCost"
                placeholder="Bill amount"
                onChange={handleBillAmountChange}
              />
            </div>
            <div className="tip-container">
              <div className="tip-container-label">Tip:</div>
              <div className="tip-container-slider">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={tipPercent}
                  onChange={handleChangeTipPercent}
                  className="slider"
                />
              </div>
              <div className="tip-container-value">{tipPercent}</div>
            </div>
            <div className="results-container">
              <TipDisplay title="Tip amount" value={tipAmount} />
              <TipDisplay title="Total inc tip" value={total} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
