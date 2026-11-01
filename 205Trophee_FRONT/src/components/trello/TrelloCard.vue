<!-- src/components/trello/TrelloCard.vue -->

<script setup>
import { computed } from 'vue';

const props = defineProps({
	card: {
		type: Object,
		required: true,
	},
	checklists: {
		type: Array,
		default: () => [],
	},
	labelNames: {
		type: Object,
		default: () => ({}),
	},
});

// Image de couverture
const coverUrl = computed(() => {
	const cover = props.card.cover;

	if (!cover) return null;

	const images = cover.scaled || [];

	// Privilégie une image suffisamment grande
	const image = [...images]
		.reverse()
		.find(item => item.width >= 300)
		|| images.at(-1);

	return image?.url || cover.url || null;
});

// Couleur de couverture
const coverColor = computed(() => {
	const cover = props.card.cover;

	if (!cover || cover.color === 'null') return null;

	return cover.color || null;
});

// Date limite
const dueDate = computed(() => {
	if (!props.card.due) return null;

	return new Intl.DateTimeFormat('fr-FR', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(new Date(props.card.due));
});

const dueState = computed(() => {
	if (!props.card.due) return '';

	if (props.card.dueComplete) return 'completed';

	return new Date(props.card.due) < new Date()
		? 'overdue'
		: 'pending';
});

// Progression des checklists
const checklistProgress = computed(() => {
	let total = 0;
	let completed = 0;

	for (const checklist of props.checklists) {
		const items = checklist.checkItems || [];

		total += items.length;
		completed += items.filter(
			item => item.state === 'complete'
		).length;
	}

	return { total, completed };
});
</script>

<template>
	<article class="trello-card">

		<!-- Couverture image -->
		<img v-if="coverUrl" class="card-cover" :src="coverUrl" alt="" loading="lazy" />

		<!-- Couverture couleur -->
		<div v-else-if="coverColor" class="card-cover-color" :style="{ backgroundColor: coverColor }"></div>

		<div class="card-content">

			<!-- Étiquettes -->
			<div v-if="card.labels?.length" class="card-labels">
				<span v-for="label in card.labels" :key="label.id" class="card-label" :style="{
					backgroundColor: label.color || '#aaa'
				}">
					{{ label.name || labelNames[label.color] || '' }}
				</span>
			</div>

			<!-- Titre -->
			<h3>{{ card.name }}</h3>

			<!-- Description -->
			<p v-if="card.desc" class="card-description">
				{{ card.desc }}
			</p>

			<!-- Informations -->
			<div class="card-footer">

				<div class="card-metadata">

					<span v-if="dueDate" class="card-due" :class="dueState">
						◷ {{ dueDate }}
					</span>

					<span v-if="checklistProgress.total" class="card-checklist">
						☑ {{ checklistProgress.completed }}/{{ checklistProgress.total }}
					</span>
				</div>

				<!-- Membres -->
				<div v-if="card.members?.length" class="card-members">
					<span v-for="member in card.members" :key="member.id" class="member-avatar"
						:title="member.fullName">
						<img v-if="member.avatarUrl" :src="member.avatarUrl" :alt="member.fullName" />

						<span v-else>
							{{ member.initials || '?' }}
						</span>
					</span>
				</div>

			</div>

		</div>

	</article>
</template>

<style scoped>
.trello-card {
	flex: 0 0 auto;
	min-width: 0;

	background: var(--trello-card-bg, white);
	border: 1px solid var(--trello-card-border, #e2e5e9);
	border-radius: 8px;

	overflow: hidden;
	overflow-wrap: anywhere;

	box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
}

/* Couverture image */
.card-cover {
	display: block;
	width: 100%;
	max-height: 180px;
	aspect-ratio: 16 / 9;
	object-fit: cover;
	object-position: center;
}

/* Couverture unie */
.card-cover-color {
	width: 100%;
	height: 12px;
}

.card-content {
	padding: 12px;
}

.card-content h3 {
	font-size: 0.95rem;
	font-weight: 600;
	line-height: 1.4;
	margin: 0;
}

.card-labels {
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	margin-bottom: 8px;
}

.card-label {
	display: inline-flex;
	align-items: center;
	min-height: 8px;
	padding: 3px 8px;
	border-radius: 4px;
	font-size: 0.7rem;
	font-weight: 600;
	color: white;
	overflow-wrap: anywhere;
}

.card-description {
	font-size: 0.85rem;
	line-height: 1.4;
	color: var(--trello-muted, #667085);
	margin: 8px 0 0;
	white-space: pre-wrap;
}

.card-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 12px;
}

.card-metadata {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px;
}

.card-due,
.card-checklist,
.card-attachments {
	font-size: 0.72rem;
	padding: 4px 7px;
	border-radius: 4px;
	background: #edf0f2;
}

.card-due.overdue {
	background: #fee4e2;
	color: #b42318;
}

.card-due.completed {
	background: #dcfae6;
	color: #067647;
}

.card-members {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
}

.member-avatar {
	width: 28px;
	height: 28px;
	border-radius: 50%;
	overflow: hidden;
	display: grid;
	place-items: center;
	background: #dce2e8;
	font-size: 0.7rem;
	font-weight: 600;
	margin-left: -4px;
	border: 2px solid var(--trello-card-bg, white);
}

.member-avatar img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
