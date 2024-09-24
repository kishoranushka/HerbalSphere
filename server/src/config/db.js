import mongoose from 'mongoose';
import { config } from './config.js';

// MongoDB connection
const connectDB = async () => {
	main()
		.then(() => {
			console.log('Connected to database successfully');
		})
		.catch((error) => {
			console.error('Failed to connect to Database. ', error);
		});

	async function main() {
		await mongoose.connect(config.databaseUrl);
	}
};

export default connectDB;
