FROM nginx

WORKDIR /app
COPY public/* ./www/
COPY tmp/ ./www/
COPY nginx.conf /etc/nginx/conf.d
RUN rm /etc/nginx/conf.d/default.conf