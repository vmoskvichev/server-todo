const Todo = require('../models/todo');

const getAll = async (err) => {
	const res = await Todo.find({});

	try {
		return res;
	} catch (err) {
		console.log(err);
	}
};

const add = async (label) => {
	const todo = new Todo({
		label,
		isDone: false,
	});

	const result = await todo.save();

	try {
		return result;
	} catch (err) {
		console.log(err);
	}
};

const setStatus = async (id, isDone) => {
	const res = await Todo.findByIdAndUpdate({ _id: id }, { isDone });
	try {
		return res;
	} catch (err) {
		console.log(err);
	}
};

const remove = async (id) => {
	const res = await Todo.findByIdAndDelete({ _id: id });
	try {
		return res;
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getAll,
	add,
	setStatus,
	remove,
};
