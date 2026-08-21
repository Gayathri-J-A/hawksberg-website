from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func

from app.core.database import Base


class TrainingUser(Base):
    __tablename__ = "training_users"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    name = Column(
        String(150),
        nullable=False,
    )

    email = Column(
        String(200),
        nullable=False,
        index=True,
    )

    role = Column(
        String(20),
        nullable=False,
        default="user",
    )

    login_code = Column(
        String(50),
        nullable=False,
    )

    # NEW COLUMN
    training_name = Column(
        String(100),
        nullable=False,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )