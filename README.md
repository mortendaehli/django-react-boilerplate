# django-react-boilerplate
Django-react boilerplate for SaaS using docker

# Todo:
- Consider to change from token based auth to JWT for the backend.
- Consider moving the auth_token from local_storage to cookies httponly. [Reddit discussion here](https://www.reddit.com/r/reactjs/comments/cubfsa/local_storage_vs_cookies_authentication_tokens/). If we keep local_storage. Consider change it to session_storage.

# Stuff for production:
- Consider offloading static assets to a [S3-compatible storage account](https://www.digitalocean.com/community/tutorials/how-to-build-a-django-and-gunicorn-application-with-docker)

# Credits
- (docker-compose-django-react)[https://github.com/18F/docker-compose-django-react]
- (django-react-boilerplate)[https://github.com/saasitive/django-react-boilerplate]


# Run
- Build: docker-compose -f docker-compose-dev.yml build
- Run: docker-compose -f docker-compose-dev.yml up
- Stop: docker-compose -f docker-compose-dev.yml down
- Force build and run: docker-compose -f docker-compose-dev.yml up --build