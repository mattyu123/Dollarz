import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddExpense() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]) //Set separate one for pulling the categories from the backend

  //Pull the data from the categories route to populate it
  useEffect(() => {
    axios.get("http://localhost:8000/categories")
      .then(res => {
        setCategories(res.data)
      })
      .catch(error => {
        console.error("Axios Error:", error)
      })
  }, [])


  //Function to handle the submission of everything in the field
  const handleSubmit = async (e) => {
    // e.preventDefault();

    // Create an object to send to the backend
    const expenseData = {
      date,
      name,
      value,
      category
    };

    //Send the data to the backend
    axios.post("http://localhost:8000/expenses", JSON.stringify(expenseData), {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <div>
      <h3>Add Expenses here</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)} />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <input
          type="number"
          placeholder="Amount"
          value={value}
          onChange={(e) => setValue(e.target.value)} />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <button type="submit">Add Expense</button>
      </form>
      <p>
        
      </p>
    </div>
  )
}