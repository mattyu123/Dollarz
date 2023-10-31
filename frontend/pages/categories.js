import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import AddCategory from "../components/AddCategory";
import CategoryTable from "../components/CategoryTable";

export default function() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/categories")
      .then(res => {
        setCategories(res.data)
      })
      .catch(error => {
        console.error("Axios Error:", error)
      })
    }, [])
  
  //Function that handles deleting a category
  const handleDeleteCategory = (categoryID) => {
    axios.delete(`http://localhost:8000/categories/${categoryID}`)
      .then(res => {
        setCategories(categories.filter((category) => category._id !== categoryID))
      })
      .catch(error => {
        console.error("Axios error in categories.js", error)
      })
  }
  
  return (
    <>
      <NavBar />
      <CategoryTable data={categories} onDeleteCategory={handleDeleteCategory}/>
      <AddCategory />
    </>
  )
}