import createHttpError from 'http-errors';
import usersModel from '../models/users.model.js';

const adminMiddleware = async (req, res, next) => {
	try {
		const userId = req.userId;
		const user = await usersModel.findOne({ _id: userId });
		const adminRole = user.isAdmin;

		if (!adminRole) {
			return res
				.status(403)
				.json({ message: 'Access denied. User is not an admin.' });
		}

		// If user is an admin, proceed to the next middleware
		next();
	} catch (error) {
		return next(
			createHttpError(
				500,
				'An error occurred while checking admin permissions.',
			),
		);
	}
};

export default adminMiddleware;
