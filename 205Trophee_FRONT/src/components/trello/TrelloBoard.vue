<!-- src/components/trello/TrelloBoard.vue -->

<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue';

import { useTrello } from '@/utils/useTrello';
import TrelloList from './TrelloList.vue';

const props = defineProps({
	boardId: {
		type: String,
		required: true,
	},
});

const {
	board,
	loading,
	error,
	fetchBoard,
	cancelRequest,
} = useTrello();

// Regroupe les cartes par liste
const cardsByList = computed(() => {
	const result = {};

	for (const list of board.value?.lists || []) {
		result[list.id] = [];
	}

	for (const card of board.value?.cards || []) {
		if (!card.closed && result[card.idList]) {
			result[card.idList].push(card);
		}
	}

	// Tri des cartes
	Object.values(result).forEach(cards => {
		cards.sort((a, b) => a.pos - b.pos);
	});

	return result;
});

// Récupération des listes actives
const activeLists = computed(() => {
	return (board.value?.lists || [])
		.filter(list => !list.closed)
		.sort((a, b) => a.pos - b.pos);
});

// Récupération des checklists associées à une carte
function getChecklists(cardId) {
	return (board.value?.checklists || [])
		.filter(checklist => checklist.idCard === cardId);
}

function refresh() {
	fetchBoard(props.boardId);
}

onMounted(refresh);
onBeforeUnmount(cancelRequest);
</script>

<template>
	<div class="trello-container text-padding">
		<div class="trello-board">

			<!-- En-tête -->
			<header class="board-toolbar">
				<div>
					<h1>{{ board?.name || 'Tableau Trello' }}</h1>

					<p v-if="board">
						{{ activeLists.length }} colonnes
						· {{board.cards?.filter(c => !c.closed).length || 0}} cartes
					</p>
				</div>

				<button type="button" :disabled="loading" @click="refresh">
					{{ loading ? 'Chargement...' : 'Actualiser' }}
				</button>
			</header>

			<!-- Chargement -->
			<div v-if="loading && !board" class="board-message">
				Chargement du tableau...
			</div>

			<!-- Erreur -->
			<div v-else-if="error && !board" class="board-error">
				{{ error }}

				<button @click="refresh">
					Réessayer
				</button>
			</div>

			<!-- Kanban -->
			<div v-else-if="board" class="board-columns">

				<TrelloList v-for="list in activeLists" :key="list.id" :list="list" :cards="cardsByList[list.id] || []"
					:get-checklists="getChecklists" :label-names="board.labelNames" />

			</div>

			<p v-else-if="error" class="board-error">
				{{ error }}
			</p>

		</div>
	</div>
</template>

<style scoped>
.trello-board {
	width: 100%;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.board-toolbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
}

.board-toolbar h1 {
	font-size: 1.25rem;
	margin: 0;
}

.board-toolbar p {
	color: #667085;
	font-size: 0.8rem;
	margin: 4px 0 0;
}

.board-toolbar button {
	padding: 8px 14px;
	border: 0;
	border-radius: 6px;
	background: #2563eb;
	color: white;
	cursor: pointer;
}

.board-toolbar button:disabled {
	opacity: 0.6;
	cursor: wait;
}

.board-columns {
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: minmax(260px, 300px);
	align-items: start;
	gap: 14px;

	width: 100%;
	min-width: 0;
	overflow-x: auto;
	padding: 4px 2px 16px;
}

.board-message,
.board-error {
	padding: 24px;
	text-align: center;
	border-radius: 8px;
	background: #f0f2f5;
}

.board-error {
	color: #b42318;
}

@media (max-width: 768px) {
	.board-columns {
		grid-auto-columns: 82vw;
		scroll-snap-type: x proximity;
	}

	.board-columns>* {
		scroll-snap-align: start;
	}
}

@media (max-width: 480px) {
	.board-columns {
		grid-auto-columns: 86vw;
		gap: 10px;
	}

	.board-toolbar h1 {
		font-size: 1.1rem;
	}
}
</style>
