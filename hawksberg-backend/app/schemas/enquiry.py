from pydantic import BaseModel, EmailStr
from datetime import datetime


class EnquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str | None = None
    message: str


class EnquiryResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    subject: str | None
    message: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True