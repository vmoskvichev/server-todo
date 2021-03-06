const express = require('express');
const route = express.Router();
const controllers = require('../controllers/todo');
const middleware = require('../middlewares/validateMiddleware');
const token = require('../middlewares/tokenMiddleware');
const { add, toggle, remove } = require('../validate/todo');

route.get('/', token, controllers.getAll);
route.post('/', middleware(add, 'body'), controllers.add);
route.delete('/:id', middleware(remove, 'params'), controllers.remove);
route.put('/:id', middleware(toggle, 'params'), controllers.setStatus);

module.exports = route;
