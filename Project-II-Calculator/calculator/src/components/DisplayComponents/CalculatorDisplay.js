import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div className="display">
      <h3>{props.input}</h3>
    </div>
  );
};

export default CalculatorDisplay;
