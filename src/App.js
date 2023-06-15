import React, { useState } from "react";

import InvestmentHeader from "./components/Investment/InvestmentHeader";
import InvestmentForm from "./components/Investment/InvestmentForm";
import InvestmentList from "./components/Investment/InvestmentList";

function App() {
  const [investmentData, setInvestmentData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];
    let totalInterest = 0;

    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setInvestmentData(yearlyData);
  };

  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm onSubmit={calculateHandler} />
      <InvestmentList data={investmentData} />
    </div>
  );
}

export default App;
