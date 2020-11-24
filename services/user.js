const User = require('../models/user');

const findByEmail = async (email) => {
    const res = await User.findOne({ email });
    return res;
};

const add = async (email, password) => {
    const user = new User({
        email,
        password,
    });

    const result = await user.save();
    return result;
};

module.exports = {
    findByEmail,
    add,
};
