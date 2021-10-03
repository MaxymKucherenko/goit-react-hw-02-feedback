import React from "react";
import styles from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <div className="Statistics">
    <span className={styles.span}>Good: {good}</span>
    <span className={styles.span}>Neutral: {neutral}</span>
    <span className={styles.span}>Bad: {bad}</span>
    <span className={styles.span}>Total: {total}</span>
    <span className={styles.span}>
      Positive feedback: {positiveFeedback} %
    </span>
  </div>
);

export default Statistics;
