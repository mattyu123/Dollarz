import motor.motor_asyncio
import asyncio
import os
from datetime import datetime

#MongoDB client
mongo_user = os.getenv('MONGO_INITDB_ROOT_USERNAME')
mongo_pass = os.getenv('MONGO_INITDB_ROOT_PASSWORD')
client = motor.motor_asyncio.AsyncIOMotorClient(f"mongodb://{mongo_user}:{mongo_pass}@mongodb:27017/")


database = client.Dollarz
expense_collection = database.expenses
category_collection = database.categories

#Fetch all of the expense items in the expenses collection and return it as an array
async def fetch_all_expenses():
  all_expenses = []
  expenses_pulled_from_mongo = expense_collection.find({})
  
  async for expense in expenses_pulled_from_mongo:
    expense["_id"] = str(expense["_id"]) 
    all_expenses.append(expense)
  
  sorted_expenses = sorted(all_expenses, key=lambda x: datetime.strptime(x["date"], "%Y-%m-%d"), reverse=True)

  return sorted_expenses

# Add an expense to the database
async def insert_expense(expense_data):
    result = await expense_collection.insert_one(expense_data)

# Fetch all the categories in category on Mongo
async def fetch_all_categories():
  all_categories = []

  async for category in category_collection.find({}):
     category["_id"] = str(category["_id"])
     all_categories.append(category)
  
  return all_categories

# Insert a category to the database
async def insert_category(category_data):
   result = await category_collection.insert_one(category_data)

async def delete_category(category_id):
   result = await category_collection.delete_one(category_id)
   return result
