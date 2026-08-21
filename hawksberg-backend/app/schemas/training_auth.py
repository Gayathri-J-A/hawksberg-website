from pydantic import BaseModel, EmailStr


# ==========================================
# LOGIN
# ==========================================

class TrainingLoginRequest(BaseModel):
    name: str
    userId: EmailStr
    code: str


class TrainingLoginResponse(BaseModel):
    id: int
    name: str
    email: str
    role: str
    training_name: str


# ==========================================
# VIDEO
# ==========================================

class TrainingVideoCreate(BaseModel):
    title: str
    description: str
    duration: str
    instructor: str
    youtube_url: str
    training_name: str
    created_by: str


class TrainingVideoUpdate(BaseModel):
    title: str
    description: str
    duration: str
    instructor: str
    youtube_url: str
    training_name: str


class TrainingVideoResponse(BaseModel):
    id: int
    title: str
    description: str
    duration: str
    instructor: str
    youtube_url: str
    training_name: str
    created_by: str

    class Config:
        from_attributes = True