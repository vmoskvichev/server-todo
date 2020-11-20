const token = (req, res, next) => {
	const auth = req.headers.authorization;

	if (auth) {
		const bearer = auth.split(' ');
		const bearerToken = bearer[1];
		const bearerDefault = bearer[0].toLowerCase() === 'bearer';
		if (bearerToken && bearerDefault) {
			req.token = bearerToken;
			next();
			return;
		}
	}
	res.status(403).json({ message: 'WAS ERROR' });
};

module.exports = token;
