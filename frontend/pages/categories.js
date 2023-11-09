import React, {useEffect, useState} from "react";

import axios from "axios";
import AddCategory from "../components/AddCategory";
import CategoryTable from "../components/CategoryTable";

import NavSideBar from '../components/NavSideBar'
import '../public/globalStyles.css'

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
    <div className="relative flex flex-row w-full h-full min-h-[35rem]">
          <NavSideBar/>
        <div className="w-full h-full p-8 expense-display">
          <CategoryTable data={categories} onDeleteCategory={handleDeleteCategory}/>
          <AddCategory />
        </div>

        <div className="flex sticky bottom-0 items-center bg-white w-full min-h-[4rem] px-8">
        </div>
        </div>
    </>
  )
}