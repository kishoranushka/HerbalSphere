import express from 'express';
import { createPlant } from './plantController.js';
import path from 'path';
import multer from 'multer';

import { fileURLToPath } from 'url';

// Define __dirname manually in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const plantRouter = express.Router();

// Set up multer configuration
const upload = multer({
	dest: path.resolve(__dirname, '../../public/data/uploads'),
	limits: { fileSize: 3e7 }, // 30mb --> 30 * 1024 * 1024
});

// Routes
plantRouter.post(
	'/create',
	upload.fields([
		{ name: 'coverImage', maxCount: 1 },
		{ name: 'file', maxCount: 1 },
	]),
	createPlant,
);

export default plantRouter;
