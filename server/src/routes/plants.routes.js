import express from 'express';
import {
	createPlant,
	deletePlant,
	getPlantList,
	getSinglePlant,
	updatePlant,
} from '../controller/plants.controller.js';
import path from 'path';
import multer from 'multer';

import { fileURLToPath } from 'url';
import authenticate from '../middleware/auth.middleware.js';
import adminMiddleware from '../middleware/admin.middleware.js';

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
	adminMiddleware,
	upload.single('coverImage'),
	createPlant,
);

plantRouter.patch(
	'/updatePlant/:plantId',
	authenticate,
	adminMiddleware,
	upload.single('coverImage'),
	updatePlant,
);

plantRouter.delete(
	'/deletePlant/:plantId',
	authenticate,
	adminMiddleware,
	deletePlant,
);

plantRouter.get('/plantList', getPlantList);
plantRouter.get('/singlePlant/:plantId', getSinglePlant);

export default plantRouter;
