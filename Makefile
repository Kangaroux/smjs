.PHONY: nginx server

default: nginx server
build: build-client build-nginx build-server
stop:
	docker-compose stop

# Builds the client assets in a container, creates a tmp dir in the nginx folder,
# and then copies the build files from the client image into the tmp dir using a bind mount.
# The nginx image will then bind to the tmp dir and copy those files in. This way
# the client and nginx build steps can be independent which simplifies the docker config
build-client:
	docker build -t kangaroux/smjs/client client/
	-mkdir nginx/tmp
	docker run --mount type=bind,src=`pwd`/nginx/tmp/,dst=/app/tmp/ kangaroux/smjs/client cp /build/app.js /app/tmp
	docker run --mount type=bind,src=`pwd`/nginx/tmp/,dst=/app/tmp/ kangaroux/smjs/client cp -R /app/img/ /app/tmp/img

build-nginx:
	docker-compose build nginx

	# Cleanup the tmp dir where we dumped the assets built by the client
	rm -rf nginx/tmp

build-server:

nginx:
	docker-compose up -d nginx

server: