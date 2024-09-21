import createHttpError from 'http-errors';

const createUser = async (req, res, next) => {
	const { name, email, password } = req.body;

	console.log(name + ' ' + email + ' ' + password);

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
	} catch (error) {
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
	} catch (error) {
		return next(createHttpError(500, 'Error while creating user'));
	}

	res.json({
		id: newUser._id,
	});
};

export { createUser };
