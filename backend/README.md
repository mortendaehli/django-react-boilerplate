# Django backend

Work in progress. Inspiration:
- [How to build a django and gunicorn application with docker](https://www.digitalocean.com/community/tutorials/how-to-build-a-django-and-gunicorn-application-with-docker)
- 

This django application is the backend of the web application.

## Build, manage and run:
Assuming you have the environmental variables in a .env-file:
- Build the docker image using "docker build -t backend ." or equivalent
- Migrate data model to database using: "docker run --env-file .env backend sh -c "python manage.py makemigrations && python manage.py migrate"
- Manage service using interactive shell: "docker run -i -t --env-file .env backend sh"
    - Here you can for example create a superuser: "python manage.py createsuperuser"
- Run the service: "docker run --env-file .env -p 8000:8000 backend"