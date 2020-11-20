const user = require('../services/user');

const login = async (req, res) => {
	try {
		const data = await user.findByEmail(req.body.email);
		if (data.password === req.body.password) {
			res.json({ token: '123' });
			return;
		}
	} catch (err) {
		console.log(err);
	}

	res.status(401).json({});
};

module.exports = {
	login,
};
