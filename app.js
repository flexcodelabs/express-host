const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();

const server = http.createServer(app);
const router = express.Router();

app.use(express.json());
app.use(router);

app.use(express.static(path.join(__dirname, process.env.INSTANCES_HOME)));

app.use("", (req, res, next) => {
  res.sendFile(
    path.join(
      __dirname,
      `${process.env.INSTANCES_HOME}/${process.env.DEFAULT_URL}/index.html`
    )
  );
});

app.use("/", (req, res, next) => {
  res.sendFile(
    path.join(
      __dirname,
      `${process.env.INSTANCES_HOME}/${process.env.DEFAULT_URL}/index.html`
    )
  );
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "fallback/error.html"));
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`App is Live on Port: ${process.env.PORT}`);
});
