#!/bin/sh

until cd /app/backend
do
    echo "Waiting for server volume..."
done

until ./manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 2
done

gunicorn server.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4