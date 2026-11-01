<!-- src/components/trello/TrelloList.vue -->

<script setup>
import TrelloCard from './TrelloCard.vue';

defineProps({
	list: {
		type: Object,
		required: true,
	},
	cards: {
		type: Array,
		default: () => [],
	},
	getChecklists: {
		type: Function,
		required: true,
	},
	labelNames: {
		type: Object,
		default: () => ({}),
	},
});
</script>

<template>
	<section class="trello-list">

		<header class="list-header">
			<h2>{{ list.name }}</h2>

			<span class="card-count">
				{{ cards.length }}
			</span>
		</header>

		<div class="list-cards">

			<TrelloCard v-for="card in cards" :key="card.id" :card="card" :checklists="getChecklists(card.id)"
				:label-names="labelNames" />

			<p v-if="!cards.length" class="empty-list">
				Aucune carte
			</p>

		</div>

	</section>
</template>

<style scoped>
.trello-list {
	display: flex;
	flex-direction: column;

	min-width: 0;
	min-height: 0;
	height: 100%;
	max-height: 75vh;

	background: var(--trello-list-bg, #f0f2f5);
	border-radius: 10px;
	padding: 12px;
}

.list-header {
	display: flex;
	flex: 0 0 auto;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	margin-bottom: 12px;
}

.list-header h2 {
	font-size: 0.95rem;
	font-weight: 650;
	margin: 0;
	overflow-wrap: anywhere;
}

.card-count {
	font-size: 0.75rem;
	color: var(--trello-muted, #667085);
	background: rgb(0 0 0 / 5%);
	border-radius: 20px;
	padding: 3px 8px;
}

.list-cards {
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;

	min-height: 0;
	overflow-y: auto;
	overflow-x: hidden;

	gap: 10px;
	padding: 1px 4px 8px 1px;

	scrollbar-width: thin;
	overscroll-behavior-y: contain;
}

.empty-list {
	color: var(--trello-muted, #667085);
	font-size: 0.8rem;
	text-align: center;
	padding: 16px 0;
}

@media (max-width: 768px) {
	.trello-list {
		max-height: 70vh;
	}
}
</style>
