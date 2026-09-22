<script setup>
import IconBrush from '../SVG/IconBrush.vue';
import IconCar from '../SVG/IconCar.vue';
import IconCloudThinking from '../SVG/IconCloudThinking.vue';
import IconDiamond from '../SVG/IconDiamond.vue';
import IconDoor from '../SVG/IconDoor.vue';
import IconTarget from '../SVG/IconTarget.vue';

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
		title: "Finition",
		icon: IconDiamond,
		info: "Zénith",
	},
	{
		title: "Couleur",
		icon: IconBrush,
		info: "Gris Zénith",
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
</script>

<template>
	<div class="main-container text-padding">
		<div class="text-container">
			<h2>
				Une voiture familiale<br>
				devenur projet d'avanture
			</h2>
			<p>
				Cette Peogeot 205 n'a pas été choisi au hasard.<br>
				Ancienne voiture du grand-père de l'un des memmbres<br>
				de l'équipage, elle a été récupéré avec l'envie de<br>
				préserver son histoire tout en lui offrant une nouvelle destination.<br>
				<br>
				Notre objecti n'est pas d'en faire un prototype de<br>
				compétition, mais de construire une voiture simple,<br>
				fiable et cohérente avec les exigences du raid.
			</p>
		</div>

		<div class="image-container">
			<img src="@/assets/205.jpg" alt="Peugeot 205 Gris Zénith" />
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
	justify-content: space-around;
}

.image-container img {
	max-width: 470px
}

.infos-container {
	position: relative;
	bottom: 4em;
	padding: 1em;
	-webkit-box-shadow: 0px 0px 15px -5px #000000;
	box-shadow: 0px 0px 15px -5px #000000;
	border-radius: 7px;
	color: black;
	background-color: white;
}

.infos-container > div {
	display: flex;
	align-items: center;
	gap: 1em;
}

.infos-container h4 ~ div {
	position: relative;
	top: -0.4em;
}

@media (max-width: 1370px) {
	.image-container {
		display: none;
	}
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