const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const mainRouter = require('./routes/MainRouter.js');

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/', mainRouter);

module.exports = server;
