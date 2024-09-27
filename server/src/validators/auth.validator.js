import z from 'zod';

// Creating an object schema
const loginSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.trim()
		.email({ message: 'Invalid email address' }),
	password: z.string({ required_error: 'Password is required' }),
});

// Creating an object schema
const signupSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.trim()
		.min(3, { message: 'Name must be at lest of 3 chars. ' })
		.max(20, { message: 'Name must not be more than 20 characters' }),
	email: z
		.string({ required_error: 'Email is required' })
		.trim()
		.email({ message: 'Invalid email address' })
		.min(5, { message: 'Email must be at least of 5 characters' })
		.max(50, { message: 'Email must not be more than 50 characters' }),
	phone: z
		.string({ required_error: 'Phone is required' })
		.trim()
		.min(10, { message: 'Phone must be at least of 10 characters' })
		.max(12, { message: 'Phone must not be more than 12 characters' }),
	password: z
		.string({ required_error: 'Password is required' })
		.min(7, { message: 'Password must be at least of 7 characters' })
		.max(50, "Password can't be greater than 50 characters"),
});

export { signupSchema, loginSchema };
