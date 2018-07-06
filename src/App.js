import React, { Component } from "react";
import styled from "styled-components";

const Operand = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 5rem;
`;

class App extends Component {
  state = {
    operator: "add"
  };

  componentDidMount = () =>
    this.setState({
      operand1: this.getRandomIntOperand(1, 10),
      operand2: this.getRandomIntOperand(1, 10)
    });

  getRandomIntOperand = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  getOperatorSymbol = operatorType => {
    switch (operatorType) {
      case "add":
        return "+";
      case "sub":
        return "-";
      case "mult":
        return "x";
      case "div":
        return "/";
      default:
        console.log("Error: no other operations supported.");
    }
  };

  getCorrectAnswer = (operatorType, operand1, operand2) => {
    switch (operatorType) {
      case "add":
        return operand1 + operand2;
      case "sub":
        return operand1 - operand2;
      case "mult":
        return operand1 * operand2;
      case "div":
        return operand1 / operand2;
      default:
        console.log("Error: no other operations supported.");
    }
  };

  render() {
    return (
      <div>
        {this.getCorrectAnswer(
          this.state.operator,
          this.state.operand1,
          this.state.operand2
        )}
        <Operand>{this.state.operand1}</Operand>
        <Operand>{this.getOperatorSymbol(this.state.operator)}</Operand>
        <Operand>{this.state.operand2}</Operand>
      </div>
    );
  }
}

export default App;
