from sanic import Blueprint
from sanic.response import file, redirect, text

bp = Blueprint(
    'main',
    url_prefix=''
)

@bp.route('/')
@bp.route('/<path:path>')
async def index(request, path: str = None):
    if path and path.startswith('.well-known/acme-challenge'):
        index = path.index('acme-challenge') + 15
        token = path[index:]
        return text(token)
    
    if path in ['monster', 'libraries'] and request.ctx.user is None:
        return redirect(f'/login?origin={path}')

    return await file('frontend/dist/index.html')