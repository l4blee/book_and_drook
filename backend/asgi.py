from app import app

if __name__ == '__main__':
    app.run('0.0.0.0', 5001, workers=1)
