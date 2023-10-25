from fastapi import FastAPI, Depends, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pymongo import MongoClient
import os


app = FastAPI()

# MongoDB client
MONGODB_USERNAME = os.environ.get("MONGODB_USERNAME")
MONGODB_PASSWORD = os.environ.get("MONGODB_PASSWORD")

client = MongoClient(f"mongodb://{MONGODB_USERNAME}:{MONGODB_PASSWORD}@mongodb:27017/")
db = client.mydatabase


@app.on_event("startup")
async def startup_event():
    # when server starts
    ...

# EXAMPLE
@app.get("/")
async def read_root():
    exampledoc = db.mydatabase.mytable.find_one()

    # FastAPI has background tasks

    # demo
    return {"Hello": "World", "data": exampledoc, "task_id": task.id}


