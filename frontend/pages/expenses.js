import React, {useEffect, useState} from "react";
import axios from "axios";

import ExpenseTable from "../components/ExpensesTable";
import AddExpense from "../components/AddExpense";

import NavSideBar from "../components/NavSideBar";
import '../public/globalStyles.css'

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

  //function handles deleting expenses
  const handleDeleteExpense = (expenseID) => {
    axios.delete(`http://localhost:8000/expenses/${expenseID}`)
      .then(res => {
        console.log("res",res)
        setExpensesList(expensesList.filter((expense) => expense._id !== expenseID))
      })
      .catch(error => {
        console.error("Axios error in expenses.js", error)
      })
  };

  return (
    <>
    <div className="relative flex flex-row w-full h-full min-h-[35rem]">
          <NavSideBar/>
        <div className="w-full h-full p-8">
          <ExpenseTable data={expensesList} onDeleteExpense={handleDeleteExpense}/>
          <AddExpense />
        </div>

        <div className="flex sticky bottom-0 items-center bg-white w-full min-h-[4rem] px-8">
          <span>Footer</span>
        </div>
        </div>
    </>
  )
}
