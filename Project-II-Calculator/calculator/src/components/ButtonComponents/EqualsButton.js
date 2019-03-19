import React from "react";
import "./Button.css";

const EqualsButton = props => {
  return (
    <button className="box red" onClick={() => props.handleClick("=")}>
      <h3>=</h3>
    </button>
  );
};

export default EqualsButton;
