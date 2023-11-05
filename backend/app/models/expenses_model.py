# Database manipulation for /expenses
from app.db.connection import database

expense_collection = database.get_collection("expenses")

# Add an expense to the database
async def create_expense(expense_data):
    await expense_collection.insert_one(expense_data)

#Fetch all of the expense items in the expenses collection and return it as an array
async def fetch_all_expenses():
  all_expenses = []
  expenses_pulled_from_mongo = expense_collection.find({})
  
  async for expense in expenses_pulled_from_mongo:
    expense["_id"] = str(expense["_id"]) 
    all_expenses.append(expense)
  
  sorted_expenses = sorted(all_expenses, key=lambda x: datetime.strptime(x["date"], "%Y-%m-%d"), reverse=True)

  return sorted_expenses