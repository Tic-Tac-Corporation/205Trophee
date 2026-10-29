<script setup>
import IconCase from '../SVG/IconCase.vue';
import IconGift from '../SVG/IconGift.vue';
import IconHandshake from '../SVG/IconHandshake.vue';
import IconSpeaker from '../SVG/IconSpeaker.vue';

const items = [
	{
		icon: IconCase,
		title: "Prêt de matériel",
	},
	{
		icon: IconHandshake,
		title: "Coup de main",
	},
	{
		icon: IconSpeaker,
		title: "Relais du projet",
	},
	{
		icon: IconGift,
		title: "Don de fournitures",
	},
];
</script>

<template>
	<div class="soutien-container text-padding">
		<h2>Vous souhaitez <span class="text-orange">contribuer autrement ?</span></h2>
		<br>
		<div class="items-container">
			<div class="item" v-for="(item, index) in items" :key="index">
				<component :is="item.icon" :size="30" fill="var(--color-text)" />
				<p>{{ item.title }}</p>
			</div>

			<button>Nous proposer votre aide</button>
		</div>
	</div>
</template>

<style scoped>
.items-container {
	display: flex;
	justify-content: space-evenly;
	gap: 1em;
	flex-wrap: wrap;
}

.item {
	padding: 1em;
	border: 1px solid rgba(128, 128, 128, 0.3);
	border-radius: 0.5em;
	display: flex;
	gap: 1em;
	align-items: center;
	position: relative;
	width: fit-content;
}

button {
	padding: 0.7em 1em;
	border: none;
	background-color: var(--color-orange);
	color: white;
	text-transform: uppercase;
	border-radius: 0.5em;
	cursor: pointer;
}
</style>