import React, {useState} from "react";

export default function TotalExpenses({data, selectMonth}) {
  const calculateTotalExpense = () => {
    if (!data) {
      return 0
    }
    
    const TotalExpenses = data
      .filter(expense => expense.date.startsWith(selectMonth))
      .reduce((total, expense) => total + expense.value, 0)
    return TotalExpenses.toFixed(2)
  }

  //Define a month variable so that on the UI it shows as a more user-friendly month and year
  let month = ""

  switch (selectMonth) {
    case "2023-12":
      month = "December 2023"
      break
    case "2023-11":
      month = "November 2023"
      break
    case "2023-10":
      month = "October 2023"
      break
    case "2023-09":
      month = "September 2023"
      break
    case "2023-08":
      month = "August 2023"
      break
    case "2023-07":
      month = "July 2023"
      break
    case "2023-06":
      month = "June 2023"
      break
    case "2023-05":
      month = "May 2023"
      break
    case "2023-04":
      month = "April 2023"
      break
    case "2023-03":
      month = "March 2023"
      break
    case "2023-02":
      month = "February 2023"
      break
    case "2023-01":
      month = "January 2023"
      break
  }

  return (
    <div>
      <p>Total Spending In <strong>{month}:</strong></p>
      <div className="heading">${calculateTotalExpense()}</div>
    </div>
  )
}

