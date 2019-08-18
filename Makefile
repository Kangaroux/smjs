.PHONY: nginx server

default: nginx server
build: build-client build-nginx build-server

# Builds the client assets in a container and then copies them into the nginx directory
build-client:
	docker build -t kangaroux/smjs/client client/
	-mkdir nginx/tmp
	docker run --mount type=bind,src=`pwd`/nginx/tmp/,dst=/app/tmp/ kangaroux/smjs/client cp /build/app.js /app/tmp

build-nginx:
	docker-compose build nginx

build-server:

nginx:
	docker-compose up -d nginx

server: