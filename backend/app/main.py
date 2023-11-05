from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# REST ROUTES
from app.routers.rest.expenses import router as expenses_router
from app.routers.rest.categories import router as category_router

# GraphQL ROUTES
# expenseql

# Database initalization
from app.db.init_db import init_db

app = FastAPI(title="Dollarz API", version="1.0.0")

# CORS: Allow all orgin, headers, methods
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# Setup Routers
app.include_router(expenses_router, tags=["expenses"])
app.include_router(category_router, tags=["categories"])

# Startup - any other initalization
@app.on_event("startup")
async def startup_event():
    await init_db()

# Shutdown cleanup
@app.on_event("shutdown")
async def shutdown_event():
    # Cleanup
    pass
