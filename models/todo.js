const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const TodoSchema = new Schema({
    label: String,
    isDone: Boolean
})

module.exports = model('todo', TodoSchema);