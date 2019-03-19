import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <button className="long-box" onClick={props.handleClear}>
      <h3>CLEAR</h3>
    </button>
  );
};

export default ActionButton;
