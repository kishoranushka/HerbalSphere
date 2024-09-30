import { config } from '../config/config.js';
import createHttpError from 'http-errors';
// import { verify } from 'jsonwebtoken';
import pkg from 'jsonwebtoken';

const { verify } = pkg;

const authenticate = async (req, res, next) => {
	const token = req.header('Authorization');

	if (!token) {
		return next(createHttpError(401, 'Authorization token is required'));
	}

	try {
		console.log('token ', token);
		const parsedToken = token.split(' ')[1];

		const decoded = verify(parsedToken, config.jwtSecret);
		req.userId = decoded.sub; // sub --> is user id;
		next();
	} catch {
		return next(createHttpError(401, 'Token expire'));
	}
};

export default authenticate;
