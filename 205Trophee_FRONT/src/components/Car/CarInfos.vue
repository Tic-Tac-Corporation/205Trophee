<script setup>
import { ref } from 'vue';
import IconBrush from '../SVG/IconBrush.vue';
import IconCar from '../SVG/IconCar.vue';
import IconCloudThinking from '../SVG/IconCloudThinking.vue';
import IconDoor from '../SVG/IconDoor.vue';
import IconEngine from '../SVG/IconEngine.vue';
import IconTarget from '../SVG/IconTarget.vue';
import CarDot from './CarDot.vue';
import carDots from '@/utils/carDots.js';

const carInfos = [
	{
		title: "Modèle",
		icon: IconCar,
		info: "Peugeot 205 phase 2",
	},
	{
		title: "Carrosserie",
		icon: IconDoor,
		info: "5 portes",
	},
	{
		title: "Motorisation",
		icon: IconEngine,
		info: "1.4 essence (TU3)",
	},
	{
		title: "Transmission",
		icon: IconEngine,
		info: "Traction avant",
	},
	{
		title: "Poids",
		icon: IconBrush,
		info: "950",
	},
	{
		title: "Objectif",
		icon: IconTarget,
		info: "205 Trophée 2027",
	},
	{
		title: "Philosophie",
		icon: IconCloudThinking,
		info: "Simple Fiable et réparable",
	},
];

const selectedDotID = ref(0);

const selectDot = (id) => {
	if (id === selectedDotID.value) return selectedDotID.value = 0;
	selectedDotID.value = id
};
</script>

<template>
	<div class="main-container text-padding">
		<div class="text-container">
			<h2>
				Une préparation pensée pour le RAID
			</h2>
			<p>
				Notre objectif n'est pas de transformer cette Peugeot 205 en véhicule
				de compétition, mais de la préparer pour affronter le 205 Trophée dans
				les meilleurs conditions. Chaque modification répond à un besoin
				concret : fiabilité, sécurité, autonomie ou confort, tout en conservant
				une mécanisque simple et réparable.
			</p>
		</div>

		<div class="image-container">
			<img src="@/assets/205_profil.png" alt="Peugeot 205 Gris Zénith" />

			<CarDot v-for="dot in carDots" :title="dot.title" :description="dot.descirption" :x="dot.x" :y="dot.y" :selected="selectedDotID === dot.id" @click="selectDot(dot.id)" />
		</div>

		<div class="infos-container">
			<div v-for="info in carInfos">
				<component :is="info.icon" :size="30" />
				<div>
					<h4>{{ info.title }}</h4>
					<div>{{ info.info }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.main-container {
	display: flex;
	gap: 2em;
	justify-content: center;
	align-items: center;
}

.image-container {
	position: relative;
}

.image-container img {
	width: 800px;
	max-width: 80vw;
}

.infos-container {
	padding: 1em;
	-webkit-box-shadow: 0px 0px 15px -5px #000000;
	box-shadow: 0px 0px 15px -5px #000000;
	border-radius: 7px;
	color: black;
	background-color: white;
}

.infos-container>div {
	display: flex;
	align-items: center;
	gap: 1em;
}

.infos-container h4~div {
	position: relative;
	top: -0.4em;
}



@media (max-width: 870px) {
	.main-container {
		flex-wrap: wrap;
	}

	.infos-container {
		bottom: 0;
	}

	br {
		content: " ";
		display: none;
	}
}
</style>