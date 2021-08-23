import React from "react";
import Controls from "./Buttons";
import Section from "../SectionTitle/SectionTitle";
import Statistics from "../Statistics/statistics";
import Notification from "../SectionTitle/Notification";

class Feedback extends React.Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  GoodIncrement = () => {
    this.setState((prevState) => ({
      Good: prevState.Good + 1,
    }));
  };
  NeutralIncrement = () => {
    this.setState((prevState) => ({
      Neutral: prevState.Neutral + 1,
    }));
  };
  BadIncrement = () => {
    this.setState((prevState) => ({
      Bad: prevState.Bad + 1,
    }));
  };



render() {
    const total = Object.values(this.state).reduce((item, acc) => {
      return (acc += item);
    }, 0);
    const percent = Math.round(this.state.Good / total * 100);
    return (
      <div className="Feedback">
        <Controls
          GoodIncrement={this.GoodIncrement}
          NeutralIncrement={this.NeutralIncrement}
          BadIncrement={this.BadIncrement}
        />

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              Good={this.state.Good}
              Neutral={this.state.Neutral}
              Bad={this.state.Bad}
              Total={total}
              PosistiveFeedback={percent}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}



export default Feedback;
