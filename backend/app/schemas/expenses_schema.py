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
        if v is None or v == "None":
            return None
        return str(v)
        
    @validator('date', pre=True)
    def validate_date(cls, value):
        if not isinstance(value, datetime):
            try:
                return datetime.strptime(value, "%Y-%m-%d").date()
            except ValueError as e:
                raise ValueError(f"Could not parse date: {value}")
        return value
