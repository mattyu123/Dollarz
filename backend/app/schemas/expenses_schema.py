# Schemas for the /expenses route
from pydantic import BaseModel, Field, validator
from datetime import datetime
from typing import Optional

class ExpenseCreate(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    date: datetime
    name: str
    value: float
    category: str

    @validator('id', pre=True, always=True)
    def set_id(cls, v):
        return str(v)
    @validateor('date', pre=True)
        if not isinstance(value, datetime):
            return datetime.strptime(value, "%Y-%m-%d")
        return value
