# core/base_settings.py - global configuration
from pydantic_settings import BaseSettings

# For now its just Mongodb
class Settings(BaseSettings):
    mongo_host: str = "mongodb"
    mongo_port: str = "27017"
    database_name: str = "Dollarz"

    class Config:
        env_file = ".env"

settings = Settings()
