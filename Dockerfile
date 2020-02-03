FROM node:12

WORKDIR /home/app

ADD package.json .
ADD yarn.lock .
RUN NODE_ENV=dev yarn install --production=false

COPY . /home/app
RUN NODE_ENV=dev yarn bootstrap
# RUN yarn build:client
RUN yarn build:api
CMD [ "yarn", "start:api" ]