# /categories route
from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
from app.models.category_model import *
from app.schemas.category_schema import *
from typing import List
from bson import ObjectId

router = APIRouter()

@router.get("/categories", response_model=List[CategoryCreate])
async def read_categories():
    try:
        categories = await fetch_all_categories()
        return categories
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f"/categories - line 17: Internal Server Error: {ex}")

@router.post("/categories", response_model=CategoryCreate)
async def add_category(category: CategoryCreate):
    try:
        category_data = category.dict()
        new_category = await create_category(category_data)
        created_category = await fetch_category(new_category.inserted_id)
        return created_category
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f"/categories - line 26: Internal Server Error: {ex}")

@router.delete("/categories/{category_id}")
async def delete_category_item(category_id: str):
    if not ObjectId.is_valid(category_id):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="/categories - line 32: Invalid ObjectId format")
    
    result = await delete_category({'_id': ObjectId(category_id)})
    
    if result.deleted_count:
        return JSONResponse(status_code=status.HTTP_200_OK, content={"status": "success", "message": "Category deleted"})
    
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"/categores - line 39: id {category_id} not found")