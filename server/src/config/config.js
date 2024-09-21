import { config as conf } from 'dotenv';
conf();

const _config = {
	port: process.env.PORT,
	databaseUrl: process.env.ATLASDB_URL,
};

export const config = Object.freeze(_config); // freeze -> read only
