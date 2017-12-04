# specify the node base image with your desired version node:<version>
FROM node:8.9.1
WORKDIR /application
COPY package.json /application
COPY tsconfig.aot.json /application
COPY tsconfig.json /application
RUN npm install
COPY . /application
CMD node ./application/bin/www
# replace this with your application's default port
EXPOSE 3004
