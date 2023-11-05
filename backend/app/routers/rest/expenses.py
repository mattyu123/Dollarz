# /expenses route
from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from app.schemas.expenses_schema import *
from app.models.expenses_model import *
from typing import List
from bson import ObjectId

router = APIRouter()

@router.post("/expenses", response_model=ExpenseCreate)
async def add_expense(expense: ExpenseCreate):
    return await create_expense(expense.dict())

@router.get("/expenses")
async def list_expenses():
    return await fetch_all_expenses()

@router.delete("/expenses/{expense_id}")
async def delete_expense_item(expense_id: str):
    if not ObjectId.is_valid(expense_id):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid ObjectId format")
    
    result = await delete_expense({'_id': ObjectId(expense_id)})
    if result.deleted_count:
        return JSONResponse(status_code=status.HTTP_200_OK, content={"status": "success", "message": "expense deleted"})
    
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"expense with id {expense_id} not found")