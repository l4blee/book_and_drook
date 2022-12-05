from sanic import Blueprint
from sanic.response import file, redirect

bp = Blueprint(
    'main',
    url_prefix=''
)

@bp.route('/')
@bp.route('/<path:path>')
async def index(request, path: str = None):
    if path.startswith('.well-known/acme-challenge'):
        token = path[25:]
        return redirect(f'http://validation.acme.com/.well-known/acme-challenge/{token}')

    if path in ['monster', 'libraries'] and request.ctx.user is None:
        return redirect(f'/login?origin={path}')

    return await file('frontend/dist/index.html')