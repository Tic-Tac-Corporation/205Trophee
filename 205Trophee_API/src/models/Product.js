
import mongoose from 'mongoose';

const productVariantSchema = new mongoose.Schema({
	size: {
		type: String,
		trim: true
	},
	color: {
		type: String,
		trim: true
	},
	price: {
		type: Number,
		min: 0
	}
}, { _id: false });

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	slug: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true
	},
	description: {
		type: String,
		default: ''
	},
	category: {
		type: String,
		required: true,
		trim: true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	compareAtPrice: {
		type: Number,
		min: 0
	},
	images: [{
		type: String,
		trim: true
	}],
	variants: [productVariantSchema],
	isActive: {
		type: Boolean,
		default: true
	},
	isFeatured: {
		type: Boolean,
		default: false
	}
}, {
	timestamps: true
});

productSchema.index({ category: 1, isActive: 1 });

const Product = mongoose.model('Product', productSchema);

export default Product;
