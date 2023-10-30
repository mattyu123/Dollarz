from pydantic import BaseModel
from datetime import date

class Expense(BaseModel):
  date: str
  name: str
  value: float
  category: str

class Category(BaseModel):
  name: str