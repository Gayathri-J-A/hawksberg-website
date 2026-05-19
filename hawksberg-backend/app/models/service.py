from sqlalchemy import Column, Integer, String, Text

from app.core.database import Base


class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True)
    code = Column(String)
    title = Column(String)
    short = Column(Text)
    image = Column(String)