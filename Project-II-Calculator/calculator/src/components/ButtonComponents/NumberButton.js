import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <button className="box">
      <h3>{props.numberProp.number}</h3>
    </button>
  );
};

export default NumberButton;
