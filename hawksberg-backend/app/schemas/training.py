from pydantic import BaseModel


class TrainingCreate(BaseModel):
    slug: str
    title: str
    short: str
    duration: str
    level: str


class TrainingResponse(TrainingCreate):
    id: int

    class Config:
        from_attributes = True