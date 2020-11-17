const User = require('../models/user');

const findByEmail = async (email) => {
    const res = await User.findOne({email});

    try {
        return res;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    findByEmail
}