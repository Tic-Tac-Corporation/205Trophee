<script setup>
import IconEuro from '../SVG/IconEuro.vue';
import IconSpeaker from '../SVG/IconSpeaker.vue';
import IconTool from '../SVG/IconTool.vue';
import IconTruck from '../SVG/IconTruck.vue';

const items = [
	{
		icon: IconEuro,
		title: "Soutien financier",
		text: "Participer au financement de la préparation, de l'inscription et de la logistique."
	},
	{
		icon: IconTool,
		title: "Soutien matériel",
		text: "Fournir des pièces, des équipements, des outils ou des consommables."
	},
	{
		icon: IconTruck,
		title: "Soutien logistique",
		text: "Contribuer au transport, à l'impression, au stockage ou à l'organisation."
	},
	{
		icon: IconSpeaker,
		title: "Relais de communication",
		text: "Partager le projet et contribuer à sa visibilité."
	}
];
</script>

<template>
	<div class="accompagnement-container text-padding">
		<h2>Plusieurs façons <span class="text-orange">de nous accompagner</span></h2>
		<br>
		<div class="items-container">
			<div class="item" v-for="(item, index) in items" :key="index">
				<div class="icon">
					<component :is="item.icon" :size="50" fill="var(--color-text)" />
				</div>
				<h4>{{ item.title }}</h4>
				<p>{{ item.text }}</p>
			</div>
		</div>
		<br>
		<div class="center">
			<i>Les membres du projet réalisent eux-mêmes la préparation de la voiture.</i>
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
	width: calc(25% - 2em);
	min-width: 250px;
	position: relative;
}

.item::after {
	content: "";
	display: block;
	position: absolute;
	bottom: 0.3em;
	width: 40%;
	height: 1px;
	border-bottom: 3px solid var(--color-orange);
	left: 50%;
	transform: translateX(-50%);
}

.center {
	text-align: center;
}

@media (max-width: 1300px) {
	.items-container {
		flex-wrap: wrap;
	}
}
</style>