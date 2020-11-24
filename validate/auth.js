const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const login = Joi.object({
    email: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(30).required(),
});

const registration = Joi.object().concat(login);

module.exports = {
    login,
    registration,
};
