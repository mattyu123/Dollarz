import React from "react";

import { Button, Table } from '@rewind-ui/core';

export default function ExpenseTable({data, onDeleteExpense}) {
  const handleDelete = (expenseId) => {
    console.log("expense id", expenseId)
    onDeleteExpense(expenseId)
  }

  return (
    <Table headerColor="dark">
      <Table.Thead>
        <Table.Tr>
          <Table.Th align="left">Date</Table.Th>
          <Table.Th align="left">Name</Table.Th>
          <Table.Th align="center">Value</Table.Th>
          <Table.Th align="left">Category</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td align="center">{item.date}</Table.Td>
              <Table.Td align="center">{item.name}</Table.Td>
              <Table.Td align="center">${item.value}</Table.Td>
              <Table.Td align="center">{item.category}</Table.Td>
              <Table.Td align="center">
                <Button onClick={() => handleDelete(item._id)}>Delete</Button>
              </Table.Td>
            </Table.Tr>
          ))}
      </Table.Tbody>
    </Table>
  );
}