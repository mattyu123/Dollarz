# Database manipulation for /expenses
from app.db.connection import database
from datetime import datetime

expense_collection = database.get_collection("expenses")

import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)  

# Add an expense to the database
async def create_expense(expense_data: dict):
    try:
        result = await expense_collection.insert_one(expense_data)
        return result
    except Exception as e:
        logger.exception(f"expenses-model - line 19: An error occurred while adding new expense to the database. {e}")
        raise

# delete a expense in the database
async def delete_expense(expense_id):
    try:
        result = await expense_collection.delete_one(expense_id)
        return result
    except Exception as e:
        logger.exception(f"expenses-model - line 27: An error occurred while adding new expense to the database. {e}")
        raise 

#Fetch all of the expense items in the expenses collection and return it as an array
async def fetch_all_expenses():
    all_expenses = []
    expenses_pulled_from_mongo = expense_collection.find({})
  
    async for expense in expenses_pulled_from_mongo:
        expense["_id"] = str(expense["_id"])
        all_expenses.append(expense)
  
    # assumes datetime object
    sorted_expenses = sorted(all_expenses, key=lambda x: x["date"], reverse=True)

    return sorted_expenses