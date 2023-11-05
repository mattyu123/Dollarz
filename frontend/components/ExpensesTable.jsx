import React from "react";

export default function ExpenseTable({data, onDeleteExpense}) {
  const handleDelete = (expenseId) => {
    console.log("expense id", expenseId)
    onDeleteExpense(expenseId)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Value</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>${item.value}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}