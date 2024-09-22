import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		scientificName: {
			type: String,
			required: true,
		},
		features: {
			type: String,
			required: true,
		},
		medicalBenefits: {
			type: String,
			required: true,
		},
		bestTimeForPlantation: {
			type: String,
			required: true,
		},
		nearestNursery: {
			type: String,
			required: true,
		},
		curableDiseases: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		coverImage: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

export default mongoose.model('Plant', plantSchema);
