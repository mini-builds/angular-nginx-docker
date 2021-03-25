FROM nginx

COPY ./dist/angular-nginx-docker /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf