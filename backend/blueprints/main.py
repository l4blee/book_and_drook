from sanic import Blueprint
from sanic.response import file, redirect, text
import jwt

bp = Blueprint(
    'main',
    url_prefix=''
)


@bp.route('/')
@bp.route('/<path:path>')
async def index(request, path: str = None):
    return await file('frontend/dist/index.html')