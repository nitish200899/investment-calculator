import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <p>
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
      </label>
      <input
        type="number"
        id={props.id}
        min={props.minValue}
        value={props.value}
        className={styles.input}
        onChange={props.onChange}
      />
    </p>
  );
};

export default Input;
