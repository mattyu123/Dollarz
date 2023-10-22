from fastapi import FastAPI, Depends, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import rethinkdb as r
from pymongo import MongoClient
from celery import Celery

app = FastAPI()

# MongoDB client
client = MongoClient("mongodb://mongodb:27017/")
db = client.mydatabase

# RethinkDB connection
# r.connect("rethinkdb", 28015).repl()

# Celery configuration
celery = Celery(
    "tasks",
    broker="redis://redis:6379/0",
    backend="redis://redis:6379/0"
)

@app.on_event("startup")
async def startup_event():
    # when server starts
    ...

# EXAMPLE
@app.get("/")
async def read_root():
    mydoc = db.mydatabase.mytable.find_one()

    # Launching a task using Celery
    task = celery.send_task('example_task', args=[exampledoc['data']])

    # demo
    return {"Hello": "World", "data": exampledoc, "task_id": task.id}


