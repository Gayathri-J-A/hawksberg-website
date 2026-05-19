from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from passlib.context import CryptContext

from app.core.database import get_db
from app.models.admin import Admin
from app.schemas.auth import RegisterSchema, LoginSchema
from app.core.security import create_access_token

router = APIRouter(prefix="/api/auth", tags=["Authentication"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@router.post("/register")
def register(payload: RegisterSchema, db: Session = Depends(get_db)):
    existing_user = db.query(Admin).filter(Admin.email == payload.email).first()

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already exists")

    hashed_password = pwd_context.hash(payload.password)

    admin = Admin(
        username=payload.username,
        email=payload.email,
        password=hashed_password,
    )

    db.add(admin)
    db.commit()
    db.refresh(admin)

    return {"message": "Admin registered successfully"}


@router.post("/login")
def login(payload: LoginSchema, db: Session = Depends(get_db)):
    user = db.query(Admin).filter(Admin.email == payload.email).first()

    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if not pwd_context.verify(payload.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": str(user.id)})

    return {
        "access_token": token,
        "token_type": "bearer",
    }