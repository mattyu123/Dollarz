import React from "react";

import { Button, Table } from '@rewind-ui/core';

export default function ExpenseTable({data, onDeleteExpense}) {
  const handleDelete = (expenseId) => {
    onDeleteExpense(expenseId)
  }

  const formatDate = (date) => {
    let final = ""

    for (const item of date) {
      if (item === "T") {
        break
      } else {
        final += item
      }
    }
    return final
  }

  // console.log("data here", data)
  // console.log(typeof data[0].date)

  return (
    <Table headerColor="dark">
      <Table.Thead>
        <Table.Tr>
          <Table.Th align="center">Date</Table.Th>
          <Table.Th align="center">Name</Table.Th>
          <Table.Th align="center">Value</Table.Th>
          <Table.Th align="center">Category</Table.Th>
          <Table.Th align="center">Delete</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td align="center">{formatDate(item.date)}</Table.Td>
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