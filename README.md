# django-react-boilerplate
Django-react boilerplate for SaaS using docker with the following features:
- NGINX reverse proxy
- Let's encrypt certificates and certbot
- React frontend with redux implementation
- Django REST API with a CRUD dummy project
- Djoser for REST implementation of Django authentication system
- Auth token using local_storage. See considerations below for production.
- Token based auth. See considerations below for production.

# Get started
1. create an .env-file based on sample.env, or modify docker-compose*.yml accordingly.
2. Build: docker-compose -f docker-compose-dev.yml build
3. Run: docker-compose -f docker-compose-dev.yml up
4. Stop: docker-compose -f docker-compose-dev.yml down
5. Force build and run: docker-compose -f docker-compose-dev.yml up --build

# Considerations and alternatives for production:
- Consider offloading static assets to a [S3-compatible storage account](https://www.digitalocean.com/community/tutorials/how-to-build-a-django-and-gunicorn-application-with-docker)
- Consider auth_token from local_storage vs. cookies httponly. [Reddit discussion here](https://www.reddit.com/r/reactjs/comments/cubfsa/local_storage_vs_cookies_authentication_tokens/). If we keep local_storage. Consider change it to session_storage.
- Consider token based auth vs. JWT for the backend.

# Credits
- (docker-compose-django-react)[https://github.com/18F/docker-compose-django-react]
- (django-react-boilerplate)[https://github.com/saasitive/django-react-boilerplate]


