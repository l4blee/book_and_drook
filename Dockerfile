FROM python:3.9.6-slim-bullseye AS python

ENV PYTHONFAULTHANDLER=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONHASHSEED=random \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_DEFAULT_TIMEOUT=100

RUN apt update -y && apt upgrade -y
RUN apt install g++ -y

WORKDIR /book_drook/

COPY requirments.txt /book_drook/
RUN pip install -r requirements.txt

COPY ${SSL_PATH} /book_drook/certificates
COPY backend/ /book_drook/backend
COPY frontend/dist/ /book_drook/frontend/dist

CMD python backend/asgi.py