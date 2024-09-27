import express from 'express';
import { config } from './config/config.js';
import connectDB from './config/db.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';
import userRouter from './routes/auth.routes.js';
import plantRouter from './routes/plants.routes.js';
const app = express();

// connect to database
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Home page' });
});

app.use('/api/users', userRouter);
app.use('/api/plants', plantRouter);

// Global error handler
app.use(globalErrorHandler);

const PORT = config.port || 3000;

app.listen(PORT, () => {
	console.log(`Listining on port: ${PORT}`);
});
