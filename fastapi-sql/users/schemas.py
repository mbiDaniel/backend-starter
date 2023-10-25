from typing import List, Union

from pydantic import BaseModel



class UserBase(BaseModel):
    email: str
    name: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    name: str
    is_active: bool
    
