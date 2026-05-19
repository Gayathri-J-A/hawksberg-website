from app.core.database import Base, engine

from app.models.admin import Admin
from app.models.enquiry import Enquiry
from app.models.service import Service
from app.models.training import Training
from app.models.info_page import InfoPage

print("Creating database tables...")

Base.metadata.create_all(bind=engine)

print("Tables created successfully.")