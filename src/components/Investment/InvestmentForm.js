import React, { useState } from "react";

import styles from "./InvestmentForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("10000");
  const [yearlySavings, setYearlySavings] = useState("1200");
  const [interest, setInterest] = useState("5");
  const [duration, setDuration] = useState("15");

  const currentSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const yearlySavingsChangeHandler = (event) => {
    setYearlySavings(event.target.value);
  };

  const interestChangeHandler = (event) => {
    setInterest(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  const resetHandler = () => {
    setCurrentSavings("10000");
    setYearlySavings("1200");
    setInterest("5");
    setDuration("15");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      currentSavings: currentSavings,
      yearlyContribution: yearlySavings,
      expectedReturn: interest,
      duration: duration,
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <Input
          label="Current Savings ($)"
          id="current-savings"
          value={currentSavings}
          minValue={0}
          onChange={currentSavingsChangeHandler}
        />
        <Input
          label="Yearly Savings ($)"
          id="yearly-contribution"
          value={yearlySavings}
          minValue={0}
          onChange={yearlySavingsChangeHandler}
        />
      </div>
      <div className={styles["input-group"]}>
        <Input
          label="Expected Interest (%, per year)"
          id="expected-return"
          value={interest}
          minValue={0}
          onChange={interestChangeHandler}
        />
        <Input
          label="Investment Duration (years)"
          id="duration"
          value={duration}
          minValue={0}
          onChange={durationChangeHandler}
        />
      </div>
      <p className={styles.actions}>
        <Button type="reset" classType="buttonAlt" onClick={resetHandler}>
          Reset
        </Button>
        <Button type="submit" classType="button">
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default InvestmentForm;
