import React, { useEffect, useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function getTotalSpendingPerCategory (expenseArr) {
  const categoryMap = {};

  for (let i = 0; i < expenseArr.length; i++) {
    const item = expenseArr[i];
    const { category, value } = item;
    if (category in categoryMap) {
      categoryMap[category] += value;
    } else {
      categoryMap[category] = value;
    }
  }

  const result = []

  for (const category in categoryMap) {
    result.push({ category, value: categoryMap[category] });
  }

  return result
}


export default function CategorySpendingChart({ data, selectMonth }) {  
  if (!data) {
    return <p>Chart loading</p>
  }

  //Filter the data down to only the current month's data
  const currentMonthData = data
    .filter(expense => expense.date.startsWith(selectMonth))

  const totalSpendingPerCategory = getTotalSpendingPerCategory(currentMonthData)

  return (
      <BarChart
        width={800}
        height={300}
        data={totalSpendingPerCategory}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category"/>
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar dataKey="value"/>
      </BarChart>
  );
}