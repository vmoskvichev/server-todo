const express = require('express');
const todos = require('./todo');
const auth = require('./auth');
const route = express.Router();

route.use('/todos', todos);
route.use('/auth', auth);

module.exports = route;
