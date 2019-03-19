import React from "react";
import "./Button.css";

const SymbolButtons = props => {
  return (
    <div className="box red">
      <h3>{props.symbolProp.symbol}</h3>
    </div>
  );
};

export default SymbolButtons;
