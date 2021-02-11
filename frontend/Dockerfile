FROM node:14.15.4-alpine as build

WORKDIR /app/frontend
COPY package.json /app/frontend/
COPY package-lock.json /app/frontend/
RUN npm ci --silent
COPY . /app/frontend/
RUN npm run build

# Copy React static files and start nginx
FROM nginx:latest
COPY --from=build /app/frontend/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]