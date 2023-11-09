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
        <strong><h3 className="heading">Add Categories Here:</h3></strong>
        <p>Your finances are in your control, add any category for your expenses as you wish! </p>
        <p><strong>Note: Expenses not be deleted if you delete a category</strong></p>
        <form className="add-item" onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="item-inputs"
          />
          <Button type="submit">Add Category</Button>
        </form>
      </div>
    );
  }