import express from 'express';
import { config } from './config/config.js';

const app = express();

const PORT = config.port || 3000;

app.listen(PORT, () => {
	console.log(`Listining on port: ${PORT}`);
});
