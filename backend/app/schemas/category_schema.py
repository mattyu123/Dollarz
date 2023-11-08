# Schemas for the categories route
from pydantic import BaseModel, Field,validator
from typing import Optional

class CategoryCreate(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    name: str

    @validator('id', pre=True, always=True)
    def set_id(cls, v):
        if v is None or v == "None":
            return None
        return str(v)