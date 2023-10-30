from fastapi import FastAPI, Depends, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from bson import ObjectId

#Get the methods from the database file
from app.database import (
  fetch_all_expenses,
  insert_expense,
  fetch_all_categories,
  insert_category,
  delete_category
)

#Import the different models that we have
from app.models import (
  Expense,
  Category
)

#Defining the app variable here
app = FastAPI()

#Adding the middleware here so client can connect to server, this is old code
app.add_middleware(
  CORSMiddleware,
  allow_origins = ["*"],
  allow_credentials = True,
  allow_methods = ["*"],
  allow_headers=["*"]
)

# Expense route where expenses are pulled from the database
@app.get("/expenses")
async def get_home_page():
  response = await fetch_all_expenses()
  return response

# Post route for users to be able to add expenses
@app.post("/expenses")
async def insert_expense_item(expense_data: Expense):
  expense_dict = expense_data.model_dump()
  response = await insert_expense(expense_dict)
  return response

# Categories route where categories are pulled from database
@app.get("/categories")
async def get_categories():
  response = await fetch_all_categories()
  return response

# Categories route where categories are pulled from 
@app.post("/categories")
async def insert_category_item(category_data: Category):
  category_dict = category_data.model_dump()
  response = await insert_category(category_dict)
  return response

# Delete route where user can click on a category button and delete it
@app.delete("/categories/{category_id}")
async def delete_category_item(category_id: str):
  category_object_id = ObjectId(category_id)
  response = await delete_category({"_id": category_object_id}) 
  
  if response.deleted_count == 1:
    return "Successfully delete category item"
  raise HTTPException(404, "There is no category with that id")
