import mongoose from 'mongoose';

const shippingAddressSchema = new mongoose.Schema({
	street: {
		type: String,
		trim: true,
		maxlength: 200
	},
	additional: {
		type: String,
		trim: true,
		maxlength: 200,
		default: ''
	},
	postalCode: {
		type: String,
		trim: true,
		maxlength: 20
	},
	city: {
		type: String,
		trim: true,
		maxlength: 100
	},
	country: {
		type: String,
		trim: true,
		maxlength: 100,
		default: 'France'
	}
}, {
	_id: false
});

const contactSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
		enum: ['sponsor', 'merch', 'contact']
	},

	name: {
		type: String,
		required: true,
		trim: true,
		maxlength: 100
	},

	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		maxlength: 254
	},

	subject: {
		type: String,
		trim: true,
		maxlength: 150,
		default: ''
	},

	message: {
		type: String,
		trim: true,
		maxlength: 5000,
		default: ''
	},

	// Informations spécifiques au formulaire
	details: {
		type: mongoose.Schema.Types.Mixed,
		default: {}
	},

	// Adresse obligatoire pour le Merch (validation dans le controller)
	shippingAddress: {
		type: shippingAddressSchema,
		default: undefined
	},

	status: {
		type: String,
		enum: ['pending', 'sent', 'failed'],
		default: 'pending'
	}

}, {
	timestamps: true
});

export default mongoose.model('Contact', contactSchema);