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