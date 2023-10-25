# from .database import  engine
from fastapi import FastAPI
from users.main import router
from users import models as user_models
from database import engine

app = FastAPI()

user_models.Base.metadata.create_all(bind=engine)


app.include_router(router)

