FROM node:16.15.1 AS builder
WORKDIR ./app
COPY . .
WORKDIR ./app
RUN yarn && yarn build-storybook

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --form=builder ./app/storybook-static .
COPY nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ['nginx','-g','daemon off;']


