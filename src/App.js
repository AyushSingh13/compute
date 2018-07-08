import React, { Component } from "react";
import styled from "styled-components";

const Operand = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 5rem;
`;

const Page = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Calculation = styled.div`
  display: flex;
`;

class App extends Component {
  state = {
    operator: "sub",
    userAnswer: ""
  };

  componentDidMount = () => this.updateAllOperands();

  updateAllOperands = () =>
    this.setState({
      operand1: this.getRandomIntOperand(1, 10),
      operand2: this.getRandomIntOperand(1, 10)
    });

  handleUserInput = event => {
    const answer = event.target.value;
    if (answer !== "") {
      if (this.isCorrectAnswer(Number(answer))) {
        this.updateAllOperands();
        this.answerBox.value = "";
      }
    }
  };

  isCorrectAnswer = answer =>
    answer ===
    this.getCorrectAnswer(
      this.state.operator,
      this.state.operand1,
      this.state.operand2
    );

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
      <Page>
        <Calculation>
          <Operand>{this.state.operand1}</Operand>
          <Operand>{this.getOperatorSymbol(this.state.operator)}</Operand>
          <Operand>{this.state.operand2}</Operand>
        </Calculation>
        <input
          ref={el => (this.answerBox = el)}
          type="number"
          onChange={this.handleUserInput}
        />
        <button onClick={this.handleSubmitAnswer}>Submit</button>
        {this.isCorrectAnswer() ? (
          <div>Correct answer!</div>
        ) : (
          <div>Wrong mate, sorry :/ </div>
        )}
      </Page>
    );
  }
}

export default App;
