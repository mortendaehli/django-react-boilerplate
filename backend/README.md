# Django backend

Work in progress. Inspiration:
- [How to build a django and gunicorn application with docker](https://www.digitalocean.com/community/tutorials/how-to-build-a-django-and-gunicorn-application-with-docker)
- 

This django application is the backend of the web application.

Build the docker using "docker build -t backend ."
Run the container in two steps using:
- docker run --env-file .env backend sh -c "python manage.py makemigrations && python manage.py migrate"
- docker run --env-file .env -p 8000:8000 backend