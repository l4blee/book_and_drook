from sanic import Blueprint
from sanic.response import json

bp = Blueprint(
    'API',
    url_prefix='/api'
)


@bp.route('/get_data', methods=['POST'])
async def get_data(request):
    token = request.cookies.get('session')
    if token is None:
        return json(
            {'message': 'unauth'},
            401
        )
    
    user = request.ctx.user
    return json({'nickname': user.login, 'donated': user.donated})
