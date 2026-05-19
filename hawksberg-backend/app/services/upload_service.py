import os
from fastapi import UploadFile


UPLOAD_DIR = "uploads"


async def save_file(file: UploadFile):
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    filepath = f"{UPLOAD_DIR}/{file.filename}"

    with open(filepath, "wb") as buffer:
        content = await file.read()
        buffer.write(content)

    return filepath