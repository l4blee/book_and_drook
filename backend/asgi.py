import os
import ssl

from app import app

ssl_path = os.getenv('SSL_PATH')
ctx = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
ctx.load_cert_chain(ssl_path + 'fullchain.pem', ssl_path + 'privkey.pem')

if __name__ == '__main__':
    app.run('0.0.0.0', int(os.getenv('PORT')), workers=1, ssl=ctx)
