import cloudinary from '../config/cloudinary.js';
import path from 'path';
import { fileURLToPath } from 'url'; // Import for converting module URL to path
import plantModel from '../models/plants.model.js';
import createHttpError from 'http-errors';
import fs from 'node:fs';
import usersModel from '../models/users.model.js';

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

		// console.log('UploadResult ', uploadResult);

		// Create a new plant record in the database
		let newPlant;
		try {
			console.log('userId ', req.userId);
			newPlant = await plantModel.create({
				title,
				scientificName,
				features,
				medicalBenefits,
				bestTimeForPlantation,
				nearestNursery,
				curableDiseases,
				author: req.userId,
				coverImage: uploadResult.secure_url,
			});
		} catch {
			throw createHttpError(
				500,
				'Error while creating plant record in database',
			);
		}

		// Delete temporary files
		try {
			await fs.promises.unlink(filePath);
		} catch (error) {
			throw createHttpError(500, 'Error deleting temporary files: ');
		}

		res.status(201).json({ id: newPlant._id });
	} catch (error) {
		return next(error); // Passes any caught error to the error handler middleware
	}
};

const getPlantList = async (req, res, next) => {
	try {
		const plants = await plantModel.find();
		res.json(plants);
	} catch {
		return next(createHttpError(500, 'Error while getting a plant details'));
	}
};

const getSinglePlant = async (req, res, next) => {
	try {
		const plantId = req.params.plantId;
		const plant = await plantModel.findOne({ _id: plantId });
		console.log('plant ', plant);

		if (!plant) {
			return next(createHttpError(404, 'Plant not found. '));
		}

		res.json(plant);
	} catch {
		return next(
			createHttpError(500, 'Error while getting a single plant details'),
		);
	}
};

const updatePlant = async (req, res, next) => {
	const {
		title,
		scientificName,
		features,
		medicalBenefits,
		bestTimeForPlantation,
		nearestNursery,
		curableDiseases,
	} = req.body;

	console.log(
		req.body +
			' ' +
			title +
			' ' +
			scientificName +
			' ' +
			features +
			' ' +
			medicalBenefits +
			' ' +
			bestTimeForPlantation +
			' ' +
			nearestNursery +
			' ' +
			curableDiseases,
	);
	const plantId = req.params.plantId;

	try {
		const plant = await plantModel.findOne({ _id: plantId });

		if (!plant) {
			return next(createHttpError(404, 'Plant not found'));
		}

		const user = await usersModel.findOne({ _id: req.userId });
		// // Check access
		if (
			plant.author.toString() !== req.userId &&
			user.isAdmin.toString() == 'false'
		) {
			return next(createHttpError(403, 'You can not update plant details.'));
		}

		// if image is uploaded
		// const file = req.file;
		const file = '';
		let plantImage = '';
		try {
			if (file) {
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
					plantImage = uploadResult.secure_url;
				} catch {
					throw createHttpError(500, 'Error uploading image to Cloudinary');
				}
				// console.log('UploadResult ', uploadResult);

				// Delete temporary files
				try {
					await fs.promises.unlink(filePath);
				} catch {
					throw createHttpError(500, 'Error deleting temporary files: ');
				}

				// Delete temporary files
				try {
					await fs.promises.unlink(filePath);
				} catch (error) {
					throw createHttpError(500, 'Error deleting temporary files: ');
				}
			}
		} catch (error) {
			return next(error); // Passes any caught error to the error handler middleware
		}

		// Update plant details
		let plantD = await plantModel.find({ _id: plantId });
		console.log(plantD);
		let updatedPlant = 'aa';
		try {
			updatedPlant = await plantModel.findOneAndUpdate(
				{
					_id: plantId,
				},
				{
					title: title,
					scientificName: scientificName,
					features: features,
					medicalBenefits: medicalBenefits,
					bestTimeForPlantation: bestTimeForPlantation,
					nearestNursery: nearestNursery,
					curableDiseases: curableDiseases,
					coverImage: plant.coverImage,
					coverImage: plantImage ? plantImage : plant.coverImage,
				},
				{ new: true },
			);
		} catch {
			return next(createHttpError(500, 'Error updating plant details.'));
		}
		res.json(updatedPlant);
		// res.json({ message: 'Update successful' });
	} catch {
		return next(createHttpError(500, 'Error while processing the update.'));
	}
};

export { createPlant, getPlantList, getSinglePlant, updatePlant };
