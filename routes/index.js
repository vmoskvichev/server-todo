const express = require('express');
const todos = require('./todo');
const route = express.Router();

route.use('/todos', todos);

module.exports = route;