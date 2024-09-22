import { config as conf } from 'dotenv';
conf();

const _config = {
	port: process.env.PORT,
	databaseUrl: process.env.ATLASDB_URL,
	env: process.env.NODE_ENV,
	jwtSecret: process.env.JWT_SECRET,

	cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
	cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
	cloudinarySecret: process.env.CLOUDINARY_SECRET,
};

export const config = Object.freeze(_config); // freeze -> read only
