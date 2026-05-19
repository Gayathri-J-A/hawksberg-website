from pydantic import BaseModel


class InfoPageCreate(BaseModel):
    slug: str
    hero: str
    lead_title: str
    lead_image: str
    content: str


class InfoPageResponse(InfoPageCreate):
    id: int

    class Config:
        from_attributes = True