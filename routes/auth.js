const express = require('express');
const route = express.Router();
const controllers = require('../controllers/auth');
const middleware = require('../middlewares/validateMiddleware');
const token = require('../middlewares/tokenMiddleware');
const { auth } = require('../validate/auth');

route.post('/', middleware(auth, 'body'), controllers.login);
module.exports = route;
