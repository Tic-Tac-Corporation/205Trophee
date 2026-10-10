<script setup>
import IconCamera from '../SVG/IconCamera.vue';
import IconGear from '../SVG/IconGear.vue';
import IconGpsMarker from '../SVG/IconGpsMarker.vue';
import IconHeart from '../SVG/IconHeart.vue';
import IconTools from '../SVG/IconTools.vue';

const items = [
	{
		icon: IconGear,
		title: "Pièces et consommables",
		status: "En cours",
		statusClass: "pending"
	},
	{
		icon: IconTools,
		title: "Préparation au raid",
		status: "à financer",
		statusClass: "finance"
	},
	{
		icon: IconCamera,
		title: "Communication embarquée",
		status: "En cours",
		statusClass: "pending"
	},
	{
		icon: IconGpsMarker,
		title: "Inscription et logistique",
		status: "à financer",
		statusClass: "finance"
	},
	{
		icon: IconHeart,
		title: "Action solidaire",
		status: "Ouvert aux contributions",
		statusClass: "waiting-for-contribution"
	}
];
</script>

<template>
	<div class="soutien-container text-padding">
		<h2>Les prochaines étapes <span class="text-orange">à financer</span></h2>
		<br>
		<div class="items-container">
			<div class="item" v-for="(item, index) in items" :key="index">
				<div class="icon">
					<component :is="item.icon" :size="50" fill="var(--color-text)" />
				</div>
				<h4>{{ item.title }}</h4>
				<div :class="['status', item.statusClass]">{{ item.status }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.items-container {
	display: flex;
	justify-content: space-evenly;
	gap: 1em;
}

.item {
	padding: 1em;
	border: 1px solid rgba(128, 128, 128, 0.3);
	border-radius: 0.5em;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: calc(25% - 2em);
	min-width: 250px;
	position: relative;
}

.item h4 {
	max-width: 150px;
}

.item div.status {
	padding: 0.2em 0.7em;
	margin-top: 0.7em;
	border-radius: 0.3em;
	text-transform: uppercase;
	font-weight: bold;
	font-size: smaller;
}

.item div.status.pending {
	background-color: rgba(128, 128, 128, 0.3);
}

.item div.status.finance {
	background-color: var(--color-orange);
	color: white;
}

.item div.status.waiting-for-contribution {
	background-color: rgba(217, 122, 40, 0.3);
}

@media (max-width: 1440px) {
	.items-container {
		flex-wrap: wrap;
	}

	.item h4 {
		max-width: none;
	}
}
</style>