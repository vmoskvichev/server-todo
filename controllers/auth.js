const user = require('../services/user');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try {
        const data = await user.findByEmail(req.body.email);

        const password = data.password;
        const match = await bcrypt.compare(req.body.password, password);

        if (match) {
            res.json({ token: '123' });
            return;
        }
    } catch (err) {
        console.log(err);
    }

    res.status(401).json({});
};

const registration = async (req, res) => {
    try {
        const { password, email } = req.body;
        const data = await user.findByEmail(email);
        const bcryptedPassword = await bcrypt.hash(password, 10);

        if (data) {
            res.status(403).json({ error: 'such user yet exist' });
            return;
        }
        await user.add(email, bcryptedPassword);
        res.json({ msg: 'user has been created' });
    } catch (error) {
        res.json({ msg: 'was error' });
    }
};

module.exports = {
    login,
    registration,
};
