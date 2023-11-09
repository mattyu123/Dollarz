# /expenses route
from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
from app.schemas.expenses_schema import *
from app.models.expenses_model import *
from typing import List
from bson import ObjectId
from datetime import datetime
import logging

import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)  

import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)  

router = APIRouter()

# allow users to create an expense
@router.post("/expenses", response_model=ExpenseCreate)
async def add_expense(expense_data: ExpenseCreate):
    try:
        # Convert Pydantic model to dict and exclude 'id' field
        expense_dict = expense_data.dict(exclude={"id"})
        logger.info(f"Adding new expense: {expense_dict}")

        # Pass a dictionary
        response = await create_expense(expense_dict)
        inserted_id = response.inserted_id
        expense_data.id = str(inserted_id)

        return expense_data
    except Exception as ex:
        logger.error(f"An error occurred when adding an expense: {ex}", exc_info=True)
        raise HTTPException(status_code=500, detail="Internal Server Error")

# list all expenses
@router.get("/expenses", response_model=List[ExpenseCreate])
async def list_expenses():
    try:
        expenses = await fetch_all_expenses()  
        return expenses
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f"line 42: Internal Server Error: {ex}")

# delete an expense entry
@router.delete("/expenses/{expense_id}")
async def delete_expense_item(expense_id: str):
    if not ObjectId.is_valid(expense_id):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="line 48: Invalid ObjectId format")
    
    result = await delete_expense({'_id': ObjectId(expense_id)})
    if result.deleted_count:
        return JSONResponse(status_code=status.HTTP_200_OK, content={"status": "success", "message": "expense deleted"})
    
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"expense with id {expense_id} not found")