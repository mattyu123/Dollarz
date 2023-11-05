# Database manipulation for /categories
from app.db.connection import database

category_collection = database.get_collection("categories")

# Insert a category to the database
async def create_category(category_data):
   result = await category_collection.insert_one(category_data)
   return result

# delete a category in the database
async def delete_category(category_id):
   result = await category_collection.delete_one(category_id)
   return result

# Returns category after a given id
async def fetch_category(category_id):
    category = await category_collection.find_one({"_id": category_id})
    if category:
        category["_id"] = str(category["_id"])
        return category
    else:
        raise HTTPException(status_code=404, detail="Category not found")

# Insert a category to the database
async def fetch_all_categories():
  all_categories = []

  async for category in category_collection.find({}):
     category["_id"] = str(category["_id"])
     all_categories.append(category)
  
  return all_categories