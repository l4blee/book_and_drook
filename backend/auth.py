from functools import wraps
from typing import Optional

import jwt
from sanic.response import text

from database import UserModel


class LoginManager:
    def __init__(self, app) -> None:
        self._secret = app.config.SECRET
    
    def get_user(self, request) -> Optional[UserModel]:
        try:
            token = request.cookies.get('session')
            if token is None:
                return None
            
            serialized = jwt.decode(
                token,
                self._secret,
                'HS256'
            ).get('user')

            user_record = request.ctx.db.find_one({'login': serialized['login']})
            if user_record is None:
                return None

            user = UserModel.from_record(user_record)
        except Exception:
            user = None

        return user

    def login_user(self, user: UserModel) -> str:
        return jwt.encode(
            {'user': {
                'login': user.login
            }},
            self._secret,
            'HS256'
        )


def login_required(wrapped):
    def decorator(f):
        @wraps(f)
        async def decorated_function(request, *args, **kwargs):
            if request.ctx.user:
                response = await f(request, *args, **kwargs)
                return response
            else:
                return text("You are unauthorized.", 401)

        return decorated_function
    return decorator(wrapped)
