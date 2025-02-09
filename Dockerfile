FROM nginx:1.27.4

RUN mkdir -p /usr/share/nginx/html
COPY dist/ /usr/share/nginx/html
COPY docker/prod/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
