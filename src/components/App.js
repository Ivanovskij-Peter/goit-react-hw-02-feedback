import React from 'react';
import Feedback from './feedback/Feedback';
import Section from './section/Section';
import Statistics from './statistic/Statistics';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};
class App extends React.Component {
  state = { ...state };

  addFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  TotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };
  PositiveFeedbackPercentage = () => {
    const total = this.TotalFeedback();
    const good = this.state.good;
    return Math.floor((good * 100) / total) + '%';
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback options={state} onLeaveFeedback={this.addFeedback} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.TotalFeedback()}
            positivePercentage={this.PositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
