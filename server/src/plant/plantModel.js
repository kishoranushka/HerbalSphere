import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		scientific_name: {
			type: String,
			required: true,
		},
		features: {
			type: String,
			required: true,
		},
		medical_benefits: {
			type: String,
			required: true,
		},
		best_time_for_plantation: {
			type: String,
			required: true,
		},
		nearest_nursery: {
			type: String,
			required: true,
		},
		curable_diseases: {
			type: String,
			required: true,
		},
		auther: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		coverImage: {
			type: String,
			required: true,
		},
		file: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

export default mongoose.model('Plant', plantSchema);
