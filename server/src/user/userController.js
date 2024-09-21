import { config } from '../config/config.js';
import createHttpError from 'http-errors';
import userModel from './userModel.js';
import bcrypt from 'bcrypt';
import pkg from 'jsonwebtoken';
import { model } from 'mongoose';
const { sign } = pkg;

const createUser = async (req, res, next) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		const error = createHttpError(400, 'All fields are required');
		return next(error);
	}

	// check user
	try {
		const user = await userModel.findOne({ email });
		if (user) {
			const error = createHttpError(
				400,
				'User already exist with this email id',
			);
			return next(error);
		}
	} catch {
		return next(createHttpError(500, 'Error while getting user'));
	}

	// Password --> hash
	let newUser;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		newUser = await userModel.create({
			name,
			email,
			password: hashedPassword,
		});
	} catch {
		return next(createHttpError(500, 'Error while creating user'));
	}

	try {
		// Generate JWT token
		const token = sign({ sub: newUser._id }, config.jwtSecret, {
			expiresIn: '7d',
			algorithm: 'HS256', // by default
		});

		// Response
		res.status(201).json({ accessToken: token });
	} catch {
		return next(createHttpError(500, 'Error while signing user'));
	}
};

const loginUser = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		const error = createHttpError(400, 'All fields are required');
		return next(error);
	}

	// Find user by email
	let user;
	try {
		user = await userModel.findOne({ email });
		if (!user) {
			return next(createHttpError(404, 'User not found'));
		}
	} catch {
		return next(createHttpError(500, 'Error while fetching user'));
	}

	// Compare passwords
	let isMatch;
	try {
		isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return next(createHttpError(400, 'Username or password incorrect!'));
		}
	} catch {
		return next(createHttpError(500, 'Error while comparing passwords'));
	}

	// Generate JWT token
	try {
		const token = sign({ sub: user._id }, config.jwtSecret, {
			expiresIn: '7d',
			algorithm: 'HS256',
		});

		// Respond with token
		res.status(201).json({ accessToken: token });
	} catch {
		return next(createHttpError(500, 'Error while generating token'));
	}
};

export { createUser, loginUser };
