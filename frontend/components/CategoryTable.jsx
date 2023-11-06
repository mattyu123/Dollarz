import React from "react";
import { Button } from '@rewind-ui/core';

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
              <Button onClick={() => handleDelete(item._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}