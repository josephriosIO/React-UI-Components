import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import BottomActionButton from "./components/ButtonComponents/BottomActionButton";
import SymbolButtons from "./components/ButtonComponents/SymbolButtons";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const numbers = [
  {
    number: 9
  },
  {
    number: 8
  },
  {
    number: 7
  },

  {
    number: 6
  },
  {
    number: 5
  },
  {
    number: 4
  },

  {
    number: 3
  },
  {
    number: 2
  },
  {
    number: 1
  }
];

const symbols = [
  {
    symbol: "÷"
  },
  {
    symbol: "×"
  },
  {
    symbol: "-"
  },
  {
    symbol: "+"
  },
  {
    symbol: "="
  }
];

const App = () => {
  return (
    <div>
      <h1 className="title">Calculator App</h1>
      <div className="calculator">
        <div className="boxes">
          <CalculatorDisplay />
          <div className="number-boxes">
            <ActionButton />
            {numbers.map(number => (
              <NumberButton numberProp={number} />
            ))}
            <BottomActionButton />
          </div>
          <div className="symbol-boxes">
            {symbols.map(symbol => (
              <SymbolButtons symbolProp={symbol} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
