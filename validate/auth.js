const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const auth = Joi.object({
	email: Joi.string().min(3).max(30).required(),

	password: Joi.string().min(3).max(30).required(),
});

module.exports = {
	auth,
};
