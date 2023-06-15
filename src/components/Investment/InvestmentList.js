import React from "react";

import styles from "./InvestmentList.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InvestmentList = (props) => {
  if (props.data.length === 0) {
    return (
      <p className={styles.alternativeText}>No investment calculated yet.</p>
    );
  }
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearlyData) => (
          <tr key={yearlyData.year}>
            <td>{yearlyData.year}</td>
            <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearlyData.yearlyInterest)}</td>
            <td>{formatter.format(yearlyData.totalInterest)}</td>
            <td>
              {formatter.format(
                yearlyData.savingsEndOfYear - yearlyData.totalInterest
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default InvestmentList;
