from os import getenv
from importlib import import_module
from pathlib import Path
from sanic import Sanic
from minio import Minio

from database import MongoDB
from auth import LoginManager

app = Sanic(__name__)

app.config.SECRET = '02f24e90200099ec055f17819b97910a67571a11d762df36'
app.config.COOKIE_MAX_AGE = 60 * 60 * 2

for i in Path('backend/blueprints').glob('*.py'):
        mod = import_module(f'blueprints.{i.stem}')
        bp = mod.__dict__.get('bp')
        if bp is not None:
            app.blueprint(bp)

db = MongoDB(getenv('DB_URL'))
lm = LoginManager(app)
mc = Minio('s3:9000', secure=False)


@app.middleware
async def request(request):
    request.ctx.db = db
    request.ctx.user = lm.get_user(request)
    request.ctx.login_manager = lm
    request.ctx.mc = mc
