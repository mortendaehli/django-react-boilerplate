FROM python:3.8.5
ENV PYTHONUNBUFFERED=1
WORKDIR /app/backend

# Installing dependencies separatly in order to utilize caching most efficiently
COPY requirements.txt /app/backend/
RUN pip install --upgrade pip && pip install gunicorn && pip install -r requirements.txt

COPY . /app/backend/

EXPOSE 8000

# Collect static files
RUN python manage.py collectstatic --noinput

# run gunicorn
CMD ["gunicorn", "--bind", ":8000", "--workers", "4", "server.wsgi:application"]