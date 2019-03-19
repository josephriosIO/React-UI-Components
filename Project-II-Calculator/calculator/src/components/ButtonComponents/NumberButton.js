import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <button
      className="box"
      onClick={() => props.handleClick(props.numberProp.number)}
    >
      <h3>{props.numberProp.number}</h3>
    </button>
  );
};

export default NumberButton;
