import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os
import logging

load_dotenv()


def send_enquiry_email(name, email, phone, subject, message):
    SMTP_HOST = os.getenv("SMTP_HOST")
    SMTP_PORT = os.getenv("SMTP_PORT")
    SMTP_EMAIL = os.getenv("SMTP_EMAIL")
    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

    if not SMTP_HOST or not SMTP_PORT or not SMTP_EMAIL or not SMTP_PASSWORD:
        logging.warning("SMTP configuration missing; skipping enquiry email send")
        return False

    try:
        smtp_port_int = int(SMTP_PORT)
    except (TypeError, ValueError):
        logging.exception("Invalid SMTP_PORT value; skipping email send")
        return False

    body = f"""
New Enquiry Received

Name: {name}
Email: {email}
Phone: {phone}
Subject: {subject}
Message: {message}
"""

    msg = MIMEText(body)
    msg["Subject"] = "New Hawksberg Enquiry"
    msg["From"] = SMTP_EMAIL
    msg["To"] = SMTP_EMAIL

    try:
        server = smtplib.SMTP(SMTP_HOST, smtp_port_int)
        server.starttls()
        server.login(SMTP_EMAIL, SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        return True
    except Exception:
        logging.exception("Failed to send enquiry email")
        return False