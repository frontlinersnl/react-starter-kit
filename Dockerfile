FROM nginx:1.17.3

RUN mkdir -p /usr/share/nginx/html
COPY dist/ /usr/share/nginx/html
COPY docker/prod/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
