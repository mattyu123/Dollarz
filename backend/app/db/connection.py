# Mongodb connection configuration
import os
from motor.motor_asyncio import AsyncIOMotorClient
from app.core.base_settings import settings

# Fetching environment variables
mongo_user = os.getenv('MONGO_INITDB_ROOT_USERNAME')
mongo_pass = os.getenv('MONGO_INITDB_ROOT_PASSWORD')

# Construct the MongoDB URI using the fetched credentials
mongodb_url = f"mongodb://{mongo_user}:{mongo_pass}@{settings.mongo_host}:{settings.mongo_port}"

client = AsyncIOMotorClient(mongodb_url)
database = client[settings.database_name]