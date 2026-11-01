
// src/composables/useTrello.js

import { ref } from 'vue';

const API_URL = 'https://api.trello.com/1';

const API_KEY = import.meta.env.VITE_TRELLO_API_KEY;
const TOKEN = import.meta.env.VITE_TRELLO_TOKEN;

export function useTrello() {
	const board = ref(null);
	const loading = ref(false);
	const error = ref(null);

	let controller = null;

	async function fetchBoard(boardId) {
		controller?.abort();
		controller = new AbortController();

		const currentController = controller;

		loading.value = true;
		error.value = null;

		const params = new URLSearchParams({
			key: API_KEY,
			token: TOKEN,

			cards: 'all',
			lists: 'all',
			checklists: 'all',

			card_fields: 'all',
			card_members: 'true',
			card_member_fields: 'all',

			card_attachments: 'true',
		});

		try {
			const response = await fetch(
				`${API_URL}/boards/${boardId}?${params}`,
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
					},
					signal: currentController.signal,
				}
			);

			if (!response.ok) {
				throw new Error(
					`Erreur Trello : ${response.status} ${response.statusText}`
				);
			}

			board.value = await response.json();

		} catch (e) {
			if (e.name !== 'AbortError') {
				error.value = e.message;
			}
		} finally {
			if (controller === currentController) {
				loading.value = false;
			}
		}
	}

	function cancelRequest() {
		controller?.abort();
		controller = null;
		loading.value = false;
	}

	return {
		board,
		loading,
		error,
		fetchBoard,
		cancelRequest,
	};
}
