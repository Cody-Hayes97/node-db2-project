const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();

const carsRouter = require("./cars/carsRouter.js");

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send("hello world!");
});

module.exports = server;
