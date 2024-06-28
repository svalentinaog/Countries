const express = require("express");

const morgan = require("morgan");

const routes = require("./routes/index");

const { handlerErrors } = require("./middlewares/handlerErrors");

const cors = require("cors");

const server = express();

server.name = "API";

server.use(express.json());

server.use(morgan("dev"));

server.use(cors());

server.use("/", routes);

server.use(handlerErrors);

module.exports = server;  
