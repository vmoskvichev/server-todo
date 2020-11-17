const express = require('express');
const route = express.Router();
const controllers = require('../controllers/auth');
const token = require('../middlewares/tokenMiddleware');


route.get('/', token, controllers.login);
module.exports = route;



