const express = require('express');
const route = express.Router();
const controllers = require('../controllers/auth');
const middleware = require('../middlewares/validateMiddleware');
const { login, registration } = require('../validate/auth');

route.post('/', middleware(login, 'body'), controllers.login);
route.post('/registration', middleware(registration, 'body'), controllers.registration);
module.exports = route;
