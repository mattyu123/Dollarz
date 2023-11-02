import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function CategorySpendingChart({ data, selectMonth }) {  

  if (!data) {
    return <p>Chart loading</p>
  }

  const currentMonthData = data
    .filter(expense => expense.date.startsWith(selectMonth))

  console.log(currentMonthData)

  return (
      <BarChart
        width={500}
        height={300}
        data={currentMonthData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date"/>
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar dataKey="value"/>
      </BarChart>
  );
}