import mongoose from 'mongoose';
import { config } from './config.js';

const connectDB = async () => {
	try {
		mongoose.connection.on('connected', () => {
			console.log('Connected to database successfully');
		});

		// if Error come after connecting in future
		mongoose.connection.on('error', (error) => {
			console.log('Error in connecting to database ', error);
		});

		await mongoose.connect(config.databaseUrl);
	} catch (error) {
		console.error('Failed to connect to Database. ', error);
		process.exit(1); // stop server
	}
};

export default connectDB;
