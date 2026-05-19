from slugify import slugify


def generate_slug(text: str):
    return slugify(text)


def success_response(message: str, data=None):
    return {
        "success": True,
        "message": message,
        "data": data,
    }


def error_response(message: str):
    return {
        "success": False,
        "message": message,
    }