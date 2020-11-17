const user = require('../services/user');

const login = async (req, res) => {
    const data = await user.findByEmail(req.body.email);
    if (data.password === req.body.password) {
        res.json({token: "123"})
        return 
    }

    res.status(401).json({})
}

module.exports = {
    login
}
