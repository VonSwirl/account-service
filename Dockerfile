

# specify the node base image with your desired version node:<version>
FROM node:8.9.1
WORKDIR /app
COPY package.json /app
COPY tsconfig.aot.json /app
COPY tsconfig.json /app
RUN npm install
COPY . /app
CMD npm run build:prod
# replace this with your application's default port
EXPOSE 3004
