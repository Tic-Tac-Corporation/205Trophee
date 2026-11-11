import Contact from '../models/Contact.js';

const ALLOWED_TYPES = ['sponsor', 'merch', 'contact'];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidString = (value) => {
	return typeof value === 'string' && value.trim().length > 0;
};

const isValidDetails = (details) => {
	return details === undefined ||
		(
			details !== null &&
			typeof details === 'object' &&
			!Array.isArray(details)
		);
};

const validateMerchProducts = (products) => {
	if (!Array.isArray(products) || products.length === 0) {
		return false;
	}

	return products.every(product =>
		product &&
		isValidString(product.name) &&
		Number.isInteger(product.quantity) &&
		product.quantity > 0 &&
		(
			product.size === undefined ||
			typeof product.size === 'string'
		)
	);
};

const validateShippingAddress = (address) => {
	if (!address || typeof address !== 'object') {
		return false;
	}

	return (
		isValidString(address.street) &&
		isValidString(address.postalCode) &&
		isValidString(address.city) &&
		isValidString(address.country ?? 'France')
	);
};

const createContact = async (req, res) => {
	try {
		const {
			type,
			name,
			email,
			subject,
			message,
			details,
			shippingAddress
		} = req.body;

		// 1. Vérification du type de formulaire
		if (!ALLOWED_TYPES.includes(type)) {
			return res.status(400).json({
				success: false,
				message: 'Type de formulaire invalide.'
			});
		}

		// 2. Vérification du nom
		if (!isValidString(name) || name.trim().length > 100) {
			return res.status(400).json({
				success: false,
				message: 'Nom invalide.'
			});
		}

		// 3. Vérification de l'email
		if (
			!isValidString(email) ||
			email.length > 254 ||
			!EMAIL_REGEX.test(email.trim())
		) {
			return res.status(400).json({
				success: false,
				message: 'Adresse email invalide.'
			});
		}

		// 4. Vérification des champs facultatifs
		if (
			subject !== undefined &&
			(typeof subject !== 'string' || subject.length > 150)
		) {
			return res.status(400).json({
				success: false,
				message: 'Sujet invalide.'
			});
		}

		if (
			message !== undefined &&
			(typeof message !== 'string' || message.length > 5000)
		) {
			return res.status(400).json({
				success: false,
				message: 'Message invalide.'
			});
		}

		if (!isValidDetails(details)) {
			return res.status(400).json({
				success: false,
				message: 'Informations complémentaires invalides.'
			});
		}

		// 5. Validation spécifique au formulaire Sponsor
		if (type === 'sponsor' && !isValidString(message)) {
			return res.status(400).json({
				success: false,
				message: 'Un message est obligatoire pour une demande sponsor.'
			});
		}

		// 6. Validation spécifique au formulaire Contact
		if (type === 'contact' && !isValidString(message)) {
			return res.status(400).json({
				success: false,
				message: 'Un message est obligatoire.'
			});
		}

		// 7. Validation spécifique au formulaire Merch
		if (type === 'merch') {
			if (!validateMerchProducts(details?.products)) {
				return res.status(400).json({
					success: false,
					message: 'La liste des produits est invalide.'
				});
			}

			if (!validateShippingAddress(shippingAddress)) {
				return res.status(400).json({
					success: false,
					message: 'Une adresse de livraison complète est obligatoire.'
				});
			}
		}

		// 8. Création du document
		const contact = await Contact.create({
			type,
			name: name.trim(),
			email: email.trim().toLowerCase(),
			subject: subject?.trim() || '',
			message: message?.trim() || '',
			details: details || {},
			shippingAddress: type === 'merch'
				? {
					street: shippingAddress.street.trim(),
					additional: shippingAddress.additional?.trim() || '',
					postalCode: shippingAddress.postalCode.trim(),
					city: shippingAddress.city.trim(),
					country: (shippingAddress.country || 'France').trim()
				}
				: undefined
		});

		// 9. Réponse
		return res.status(201).json({
			success: true,
			message: 'Votre demande a bien été enregistrée.',
			data: {
				id: contact._id,
				type: contact.type,
				createdAt: contact.createdAt
			}
		});

	} catch (error) {
		console.error('Contact creation error:', error);

		return res.status(500).json({
			success: false,
			message: 'Une erreur est survenue lors de l’enregistrement.'
		});
	}
};

export {
	createContact
};