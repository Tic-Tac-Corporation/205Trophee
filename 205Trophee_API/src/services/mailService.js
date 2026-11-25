
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: process.env.SMTP_SECURE === 'true',

	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD
	}
});

// Vérifier la connexion SMTP
export const verifySMTP = async () => {
	try {
		await transporter.verify();
		console.log('SMTP connection established');
		return true;
	} catch (error) {
		console.error('SMTP connection failed:', error);
		return false;
	}
};

// Envoyer un email
export const sendEmail = async ({
	to,
	subject,
	text,
	replyTo
}) => {
	return transporter.sendMail({
		from: process.env.MAIL_FROM,
		to,
		subject,
		text,
		replyTo
	});
};
