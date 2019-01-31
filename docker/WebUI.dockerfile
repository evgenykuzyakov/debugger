# webui
FROM node:11 as build

WORKDIR /app
COPY /web-ui/package.json /web-ui/yarn.lock ./
RUN yarn
COPY /web-ui ./
RUN yarn build

FROM nginx:1.14-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY /docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
