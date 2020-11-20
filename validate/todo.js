const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const add = Joi.object({
	label: Joi.string().min(3).max(30).required(),
});

const toggle = Joi.object({
	id: Joi.objectId(),
});

const remove = Joi.object({
	id: Joi.objectId(),
});

module.exports = {
	add,
	toggle,
	remove,
};
