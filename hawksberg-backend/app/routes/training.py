from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.training import Training

router = APIRouter(prefix="/api/trainings", tags=["Trainings"])


@router.get("/")
def get_trainings(db: Session = Depends(get_db)):
    return db.query(Training).all()


@router.get("/{slug}")
def get_training(slug: str, db: Session = Depends(get_db)):
    return db.query(Training).filter(Training.slug == slug).first()