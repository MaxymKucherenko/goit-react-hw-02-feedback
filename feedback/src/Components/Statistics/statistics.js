import React from "react";
import styles from './statistics.module.css'

const Statistics = ({ Good, Neutral, Bad, Total, PosistiveFeedback }) => (
  <div className="Statistics">
    <span className={styles.span}>Good: {Good}</span>
    <span className={styles.span}>Neutral: {Neutral}</span>
    <span className={styles.span}>Bad: {Bad}</span>
    <span className={styles.span}>Total: {Total}</span>
    <span className={styles.span}>Posistive feedback: {PosistiveFeedback} %</span>
  </div>
);

export default Statistics;
