import React, { Component } from 'react';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
};

export class Feedback extends Component {
  state = { ...initialState };
  addFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback() {
    return;
  }

  reset = () => {
    this.setState(initialState);
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button name="good" onClick={this.addFeedback}>
          Good
        </button>
        <button name="neutral" onClick={this.addFeedback}>
          Neutral
        </button>
        <button name="bad" onClick={this.addFeedback}>
          Bad
        </button>
        <span>Good:{this.state.good}</span>
        <span>Neutral:{this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span>
        <span>Total:{this.countTotalFeedback}</span>
        <span>Positive feedback:{}%</span>
      </div>
    );
  }
}
