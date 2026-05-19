from pydantic import BaseModel


class ServiceCreate(BaseModel):
    slug: str
    code: str
    title: str
    short: str
    image: str | None = None


class ServiceResponse(ServiceCreate):
    id: int

    class Config:
        from_attributes = True