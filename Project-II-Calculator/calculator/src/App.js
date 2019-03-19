import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import SymbolButtons from "./components/ButtonComponents/SymbolButtons";

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
    symbol: "%"
  },
  {
    symbol: "X"
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
      <h1>Calculator App</h1>
      <div className="calculator">
        <div className="boxes">
          <div className="number-boxes">
            <ActionButton />
            {numbers.map(number => (
              <NumberButton numberProp={number} />
            ))}
            <ActionButton />
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
