FROM node
WORKDIR /home/app
COPY ["app.js", "package.json", "package-lock.json", "./"]
COPY ["fallback" "./fallback"]
RUN npm ci
EXPOSE 3000
ENTRYPOINT ["npm", "start"]