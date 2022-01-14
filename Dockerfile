FROM node:14-alpine as dependencies
WORKDIR /home/app
COPY . ./
RUN npm ci --only=production

FROM node:14.16.1-alpine3.12 as release
WORKDIR /home/app
COPY --from=dependencies /home/app/ ./

ENTRYPOINT ["npm", "start"]