import React, {useState} from "react";
import axios from "axios";

import { Button } from '@rewind-ui/core';

export default function AddCategory() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {

    const categoryData = {
      name
    }

  axios.post("http://localhost:8000/categories", JSON.stringify(categoryData), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
    return (
      <div>
        <h1>Add Additional Category Here</h1>
        <p>Your finances are in your control, add any category for your expenses as you wish! </p>
        <p><strong>Note: Expenses not be deleted if you delete a category</strong></p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          <Button type="submit">Add Category</Button>
        </form>
      </div>
    );
  }