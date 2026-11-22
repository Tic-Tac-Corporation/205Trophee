
import Product from '../models/Product.js';

// GET /api/products
export const getProducts = async (req, res) => {
	try {
		const { category, featured } = req.query;

		const filters = {
			isActive: true
		};

		if (category) {
			filters.category = category;
		}

		if (featured === 'true') {
			filters.isFeatured = true;
		}

		const products = await Product.find(filters)
			.sort({ createdAt: -1 })
			.lean();

		res.status(200).json({
			success: true,
			count: products.length,
			data: products
		});

	} catch (error) {
		console.error('Erreur récupération produits :', error);

		res.status(500).json({
			success: false,
			message: 'Erreur lors de la récupération des produits.'
		});
	}
};

// GET /api/products/:slug
export const getProductBySlug = async (req, res) => {
	try {
		console.log(req.params.slug);
		
		const product = await Product.findOne({
			slug: req.params.slug,
			isActive: true
		}).lean();

		if (!product) {
			return res.status(404).json({
				success: false,
				message: 'Produit introuvable.'
			});
		}

		res.status(200).json({
			success: true,
			data: product
		});

	} catch (error) {
		console.error('Erreur récupération produit :', error);

		res.status(500).json({
			success: false,
			message: 'Erreur lors de la récupération du produit.'
		});
	}
};
