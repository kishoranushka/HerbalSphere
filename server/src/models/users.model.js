import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			unique: true,
			require: true,
		},
		phone: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			require: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model('User', userSchema);
