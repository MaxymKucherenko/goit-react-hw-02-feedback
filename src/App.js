import React from "react";
import Controls from "./Components/buttons/Buttons";
import Section from "./Components/SectionTitle/SectionTitle";
import Statistics from "./Components/Statistics/Statistics";
import Notification from "./Components/SectionTitle/Notification";
import "./App.css";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = (name) => {
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPercent = () => {
    const { good } = this.state;
    const total = this.countTotal();
    return Math.round((good / total) * 100);
  }

  render() {
    const total = this.countTotal();
    const percent = this.countPercent();
    return (
      <div className="App">
        <header className="App-header">
          <p>Please leave feedback</p>
        </header>
        <Controls
          clickButton={this.onClick}
          options={["good", "neutral", "bad"]}
        />

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiveFeedback={percent}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
