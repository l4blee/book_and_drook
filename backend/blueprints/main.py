from tempfile import NamedTemporaryFile

from sanic import Blueprint
from sanic.response import file, redirect

bp = Blueprint(
    'main',
    url_prefix=''
)

@bp.route('/')
@bp.route('/<route:path>')
async def index(request, route: str = None):    
    if route in ['monster', 'libraries'] and request.ctx.user is None:
        return redirect(f'/login?origin={route}')
    
    if route and route.startswith('static'):
        bucket, obj = route[7:].split('/')
        with NamedTemporaryFile() as tmp:
            request.ctx.mc.fget_object(bucket, obj, tmp.name)
            return await file(tmp.name)
        
    if route and route.startswith('minio'):
        return redirect(f'http://{request.host}:9090/')
    
    return await file('frontend/dist/index.html')
