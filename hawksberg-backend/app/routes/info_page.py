from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.info_page import InfoPage

router = APIRouter(prefix="/api/info", tags=["Info Pages"])


@router.get("/{slug}")
def get_info_page(slug: str, db: Session = Depends(get_db)):
    return db.query(InfoPage).filter(InfoPage.slug == slug).first()