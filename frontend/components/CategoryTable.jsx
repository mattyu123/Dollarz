import React from "react";
import { Button, Table } from '@rewind-ui/core';

export default function CategoryTable({data, onDeleteCategory}) {
  const handleDelete = (categoryId) => {
    onDeleteCategory(categoryId)
  }
  
  return (
    <Table headerColor="dark">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Category Name</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((item, index) => (
          <Table.Tr key={index}>
            <Table.Td>{item.name}</Table.Td>
            <Table.Td>
              <Button onClick={() => handleDelete(item._id)}>Delete</Button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}