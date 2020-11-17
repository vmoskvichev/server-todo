const todo = require('../services/todo');


const getAll = async (req, res) => {
    const data = await todo.getAll();
    res.json(data);
}

const add = async (req, res) => {
    const data = await todo.add(req.body.label);
    res.json(data);
}

const setStatus = async (req, res) => {
    const data = await todo.setStatus(req.params.id);
    res.json(data);
}

const remove = async (req, res) => {
    const data = await todo.remove(req.params.id);
    res.json(data);
}


module.exports = {
    getAll,
    add,
    remove,
    setStatus,
}