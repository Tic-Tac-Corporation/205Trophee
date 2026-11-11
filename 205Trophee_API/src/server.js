import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import connectDatabase from './config/database.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

// Sécurité HTTP
app.use(helmet());

// Autorisation du frontend
app.use(cors({
	origin: process.env.FRONTEND_URL
}));

// Parsing JSON
app.use(express.json({
	limit: '10kb'
}));

// Limitation des requêtes
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 30,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
	message: {
		success: false,
		message: 'Trop de requêtes. Veuillez réessayer plus tard.'
	}
});

app.use('/api/', limiter);

// Routes API
app.use('/api/contact', contactRoutes);

// Démarrage du serveur
const startServer = async () => {
	try {
		await connectDatabase();

		const PORT = process.env.PORT || 3000;

		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});

	} catch (error) {
		console.error('Server startup error:', error);
		process.exit(1);
	}
};

startServer();