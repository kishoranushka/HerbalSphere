import express from 'express';
import { config } from './config/config.js';
import connectDB from './config/db.js';

const app = express();

// connect to database
connectDB();

const PORT = config.port || 3000;

app.listen(PORT, () => {
	console.log(`Listining on port: ${PORT}`);
});
