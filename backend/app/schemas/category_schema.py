# Schemas for the categories route
from pydantic import BaseModel, Field 
from typing import Optional

class CategoryCreate(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    name: str