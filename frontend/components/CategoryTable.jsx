import React from "react";

export default function CategoryTable({data, onDeleteCategory}) {
  const handleDelete = (categoryId) => {
    onDeleteCategory(categoryId)
  }
  
  return (
    <table>
      <thead>
        <tr>
          <th>Category Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}