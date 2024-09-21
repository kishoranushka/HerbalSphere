import express from 'express';
import { config } from './config/config.js';
import connectDB from './config/db.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';
import createHttpError from 'http-errors';

const app = express();

// connect to database
connectDB();

app.get('/', () => {
	const error = createHttpError(400, 'Something went wrong');
	throw error;
	console.log('Running home');
});

// Global error handler
app.use(globalErrorHandler);

const PORT = config.port || 3000;

app.listen(PORT, () => {
	console.log(`Listining on port: ${PORT}`);
});
