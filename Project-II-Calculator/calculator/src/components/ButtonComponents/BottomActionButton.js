import React from "react";
import "./Button.css";

const ButtonActionButton = props => {
  return (
    <button className="long-box" onClick={() => props.handleClick(0)}>
      <h3>0</h3>
    </button>
  );
};

export default ButtonActionButton;
