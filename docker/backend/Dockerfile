FROM python:3.8.5
ENV PYTHONUNBUFFERED=1

WORKDIR /app/backend
COPY ./backend/requirements.txt /app/backend/
RUN pip install --upgrade pip && pip install gunicorn && pip install -r requirements.txt

ADD ./backend /app/backend
ADD ./docker /app/docker

RUN python manage.py collectstatic --noinput