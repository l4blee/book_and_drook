import os
# import ssl

from app import app

# ctx = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
# ctx.load_cert_chain('certificates/fullchain.pem', 'certificates/privkey.pem')

if __name__ == '__main__':
    app.run('0.0.0.0', int(os.getenv('PORT')), workers=1) # , ssl=ctx)
