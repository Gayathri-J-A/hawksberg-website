from sqlalchemy import Column, Integer, String, Text

from app.core.database import Base


class InfoPage(Base):
    __tablename__ = "info_pages"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True)
    hero = Column(String)
    lead_title = Column(String)
    lead_image = Column(String)
    content = Column(Text)