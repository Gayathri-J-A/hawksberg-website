from sqlalchemy import Column, Integer, String, Text

from app.core.database import Base


class Training(Base):
    __tablename__ = "trainings"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True)
    title = Column(String)
    short = Column(Text)
    duration = Column(String)
    level = Column(String)