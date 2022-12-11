from sanic import Blueprint
from sanic.response import json

bp = Blueprint(
    'API',
    url_prefix='/api'
)


@bp.route('/get_user_data')
async def get_user_data(request):
    user = request.ctx.user
    if user is None:
        return json(
            {'message': 'unauth'},
            401
        )
    
    return json({'nickname': user.login, 'donated': user.donated})


@bp.route('/get_libraries')
async def get_libraries(request):
    data = request.ctx.db.libraries.find({})
    return json([
            {
                'title': i.get('title'),
                'address': i.get('address'),
                'booklist': i.get('booklist'),
                'image': i.get('image')
            } 
            for i in data
    ])


@bp.route('/get_playbill')
async def get_playbill(request):
    data = request.ctx.db.playbill.find({})[:8]
    
    return json([
        {
            'date': i.get('date'),
            'time': i.get('time'),
            'title': i.get('title'),
            'place': i.get('place'),
            'image': i.get('image')
        }
        for i in data
    ])