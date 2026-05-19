from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.service import Service
from app.schemas.service import ServiceCreate

router = APIRouter(prefix="/api/services", tags=["Services"])


@router.get("/")
def get_services(db: Session = Depends(get_db)):
    return db.query(Service).all()


@router.get("/{slug}")
def get_service(slug: str, db: Session = Depends(get_db)):
    service = db.query(Service).filter(Service.slug == slug).first()

    if not service:
        raise HTTPException(status_code=404, detail="Service not found")

    return service


@router.post("/")
def create_service(payload: ServiceCreate, db: Session = Depends(get_db)):
    service = Service(**payload.model_dump())

    db.add(service)
    db.commit()
    db.refresh(service)

    return service