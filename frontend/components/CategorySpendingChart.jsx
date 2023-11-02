import React from "react";
import { BarChart, Bar } from "recharts";

export default function CategorySpendingChart({ data, selectMonth }) {  
  if (!data) {
    return <div>Chart is Loading...</div>
  }

  const currentMonthExpenses = data.filter((expense) =>
    expense.date.startsWith(selectMonth)
  );

  console.log(currentMonthExpenses)

  return (
    <h1>Chart going to go here</h1>
  )
}