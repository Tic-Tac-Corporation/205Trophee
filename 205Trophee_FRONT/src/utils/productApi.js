
const API_URL = import.meta.env.VITE_API_URL;

// Récupérer tous les produits
export const getProducts = async (filters = {}) => {
	const params = new URLSearchParams();

	if (filters.category) {
		params.append('category', filters.category);
	}

	if (filters.featured !== undefined) {
		params.append('featured', filters.featured);
	}

	const query = params.toString();

	const url = `${API_URL}/api/products${query ? `?${query}` : ''}`;

	try {
		const response = await fetch(url);
		const result = await response.json();

		if (!response.ok) {
			throw new Error(result.message || 'Erreur de récupération des produits.');
		}

		return result.data;

	} catch (error) {
		console.error('Erreur API produits :', error);
		throw error;
	}
};

// Récupérer un produit par son slug
export const getProductBySlug = async (slug) => {
	try {
		const response = await fetch(
			`${API_URL}/api/products/${encodeURIComponent(slug)}`
		);

		const result = await response.json();

		if (!response.ok) {
			throw new Error(result.message || 'Produit introuvable.');
		}

		return result.data;

	} catch (error) {
		console.error('Erreur API produit :', error);
		throw error;
	}
};
