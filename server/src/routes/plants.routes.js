import express from 'express';
import {
	createPlant,
	getPlantList,
	getSinglePlant,
} from '../controller/plants.controller.js';
import path from 'path';
import multer from 'multer';

import { fileURLToPath } from 'url';
import authenticate from '../middleware/authenticate.js';

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
	authenticate,
	upload.single('coverImage'),
	createPlant,
);

plantRouter.get('/plantList', getPlantList);
plantRouter.get('/singlePlant/:plantId', getSinglePlant);

export default plantRouter;
