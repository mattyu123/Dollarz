# Schemas for the /expenses route
from pydantic import BaseModel
from datetime import date

class ExpenseCreate(BaseModel):
    date: date
    name: str
    amount: float
    category: str
