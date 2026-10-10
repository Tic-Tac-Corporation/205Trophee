<script setup>
import IconEye from '../SVG/IconEye.vue';
import IconGpsMarker from '../SVG/IconGpsMarker.vue';
import IconStar from '../SVG/IconStar.vue';
import IconTeam from '../SVG/IconTeam.vue';

const items = [
	{
		icon: IconTeam,
		title: "Une aventure humaine",
		text: "Un projet porté par une équipe passionée, engagée et de terrain.",
		color: "var(--color-text)"
	},
	{
		icon: IconEye,
		title: "Une visibilité durable",
		text: "Une présence avant, pendant et après le raid sur plusieurs supports.",
		color: "var(--color-orange)"
	},
	{
		icon: IconStar,
		title: "Un projet différenciant",
		text: "Automobile, aventure, solidarité : des valeurs fortes et authentiques autour d'un projet unique.",
		color: "var(--color-text)"
	},
	{
		icon: IconGpsMarker,
		title: "Un ancrage local",
		text: "Un projet né en Isère, soutenant une action solidaire concrète au Maroc.",
		color: "var(--color-text)"
	}
];
</script>

<template>
	<div class="soutien-container text-padding">
		<h2>Pourquoi <span class="text-orange">nous rejoindre ?</span></h2>
		<br>
		<div class="items-container">
			<div class="item" v-for="(item, index) in items" :key="index">
				<div class="icon">
					<component :is="item.icon" :size="50" :fill="item.color" />
				</div>
				<h4>{{ item.title }}</h4>
				<p>{{ item.text }}</p>
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
	min-width: 250px;
	position: relative;
}

@media (max-width: 1440px) {
	.items-container {
		flex-wrap: wrap;
	}
}
</style>