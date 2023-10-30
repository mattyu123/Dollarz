import React, {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import ExpenseTable from "../components/ExpensesTable";
import AddExpense from "../components/AddExpense";

export default function Expenses(){
  const [expensesList, setExpensesList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/expenses")
      .then(res => {
        setExpensesList(res.data)
      })
      .catch(error => {
        console.error("Axios Error:", error)
      })
    }, [])
  
  return (
    <>
      <NavBar />
      <ExpenseTable data={expensesList}/>
      <AddExpense />
    </>
  )
}
