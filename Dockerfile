FROM node
WORKDIR /home/app
COPY ["app.js", "package.json",  "error.html", "package-lock.json", "./"]
RUN npm ci
EXPOSE 3000
ENTRYPOINT ["npm", "start"]