import React, { Component } from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import BottomActionButton from "./components/ButtonComponents/BottomActionButton";
import SymbolButtons from "./components/ButtonComponents/SymbolButtons";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import EqualsButton from "./components/ButtonComponents/EqualsButton";
import * as math from "mathjs";

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
    symbol: "/"
  },
  {
    symbol: "*"
  },
  {
    symbol: "-"
  },
  {
    symbol: "+"
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  render() {
    return (
      <div>
        <h1 className="title">Calculator App</h1>
        <div className="calculator">
          <div className="boxes">
            <CalculatorDisplay input={this.state.input} />
            <div className="number-boxes">
              <ActionButton handleClear={() => this.setState({ input: "" })} />
              {numbers.map(number => (
                <NumberButton
                  handleClick={this.addToInput}
                  numberProp={number}
                />
              ))}
              <BottomActionButton handleClick={this.addToInput} />
            </div>
            <div className="symbol-boxes">
              {symbols.map(symbol => (
                <SymbolButtons
                  handleClick={this.addToInput}
                  symbolProp={symbol}
                />
              ))}
              <EqualsButton handleClick={() => this.handleEqual()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
