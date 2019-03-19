import React from "react";
import "./Button.css";

const SymbolButtons = props => {
  return (
    <button
      className="box red"
      onClick={() => props.handleClick(props.symbolProp.symbol)}
    >
      <h3>{props.symbolProp.symbol}</h3>
    </button>
  );
};

export default SymbolButtons;
