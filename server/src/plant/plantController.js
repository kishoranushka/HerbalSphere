import cloudinary from '../config/cloudinary.js';
import path from 'path';
import { fileURLToPath } from 'url'; // Import for converting module URL to path
import plantModel from './plantModel.js';

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createPlant = async (req, res, next) => {
	console.log('file ', req.file);
	const {
		title,
		scientificName,
		features,
		medicalBenefits,
		bestTimeForPlantation,
		nearestNursery,
		curableDiseases,
	} = req.body;

	const file = req.file;
	try {
		if (!file) {
			throw createHttpError(400, 'Cover image are required');
		}

		const coverImageMimeType = file.mimetype.split('/').at(-1);
		const fileName = file.filename;

		// File path where the uploaded file is temporarily stored
		const filePath = path.resolve(
			__dirname,
			'../../public/data/uploads',
			fileName,
		);

		// Upload the file to Cloudinary using the local file path
		let uploadResult;
		try {
			uploadResult = await cloudinary.uploader.upload(filePath, {
				filename_override: fileName,
				folder: 'Plant-Images',
				format: coverImageMimeType, // Ensure format matches the file type
			});
			console.log('Plant image uploaded successfully', uploadResult);
		} catch {
			throw createHttpError(500, 'Error uploading image to Cloudinary');
		}

		console.log('UploadResult ', uploadResult);
	} catch (error) {
		return next(error); // Passes any caught error to the error handler middleware
	}

	res.json({});
};

export { createPlant };
