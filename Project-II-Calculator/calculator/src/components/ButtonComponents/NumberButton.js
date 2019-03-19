import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div className="box">
      <h3>{props.numberProp.number}</h3>
    </div>
  );
};

export default NumberButton;
