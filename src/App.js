import React from "react";
import Controls from "./Components/buttons/Buttons";
import Section from "./Components/SectionTitle/SectionTitle";
import Statistics from "./Components/Statistics/statistics";
import Notification from "./Components/SectionTitle/Notification";
import "./App.css";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = (Name) => {
    this.setState((prevState) => ({
      [Name]: prevState[Name] + 1,
    }));
  };

  render() {
    const total = Object.values(this.state).reduce((item, acc) => {
      return (acc += item);
    }, 0);
    const percent = Math.round((this.state.good / total) * 100);
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
