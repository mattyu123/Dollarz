import React, {useState} from "react";

export default function TotalExpenses({data, selectMonth}) {
  const calculateTotalExpense = () => {
    if (!data) {
      return 0
    }
    
    const TotalExpenses = data
      .filter(expense => expense.date.startsWith(selectMonth))
      .reduce((total, expense) => total + expense.value, 0)
    return TotalExpenses
  }

  return (
    <div>
      <p>Total Expenses for {selectMonth}: ${calculateTotalExpense()}</p>
      <button onClick={calculateTotalExpense}>Calculate Total Expense</button>
    </div>
  )
}

