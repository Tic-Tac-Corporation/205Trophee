<script setup>
import IconCamera from '../SVG/IconCamera.vue';
import IconCar from '../SVG/IconCar.vue';
import IconChecklist from '../SVG/IconChecklist.vue';
import IconEngine from '../SVG/IconEngine.vue';
import IconRaceFlag from '../SVG/IconRaceFlag.vue';
import IconTool from '../SVG/IconTool.vue';

const phriseItems = [
	{
		title: "Diagnostic et remise en état",
		icon: IconTool,
		description: "Évaluation complète du véhicule et définition des travaux nécessaires pour préparer l'aventure.",
		state: true
	},
	{
		title: "Fiabilisation mécanique",
		icon: IconEngine,
		description: "Révision des principaux organes afin d'assurer la robustesse et la fiabilité de la 205 sur plusieurs milliers de kilomètres.",
		state: true
	},
	{
		title: "Préparation au raid",
		icon: IconCar,
		description: "Installation des équipements nécessaires et adaptation du véhicule aux contraintes du 205 Trophée.",
		state: true
	},
	{
		title: "Communication et partage",
		icon: IconCamera,
		description: "Mise en place des outils de captation, de diffusion et de communication qui permettront de suivre l'aventure en direct.",
		state: false
	},
	{
		title: "Essais et préparation finale",
		icon: IconChecklist,
		description: "Validation du véhicule, tests des équipements embarqués et préparation logistique du départ.",
		state: false
	},
	{
		title: "Cap sur le Maroc",
		icon: IconRaceFlag,
		description: "Participation au 205 Trophée 2027, action humanitaire et découverte des pistes marocaines.",
		state: false
	},
];
</script>

<template>
	<div class="planning-main-container text-padding">
		<h2>De l'atelier aux pistes marocaines</h2>

		<br><br>

		<div class="phrise">
			<div :class="{ item: true, finished: item.state }" v-for="(item, number) in phriseItems">
				<div class="number">{{ number + 1 }}</div>
				<div>
					<div class="icon">
						<component :is="item.icon" :size="60" fill="var(--color-text)" />
					</div>
					<h4>{{ item.title }}</h4>
					<div class="description">
						{{ item.description }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.phrise {

	display: flex;
	gap: 0;
	justify-content: center;
	position: relative;
}

.phrise .item {
	padding: 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 260px;
	text-align: center;
	gap: 0.5em;
	position: relative;
}

.phrise .item>.number {
	font-size: xx-large;
	width: 1.6em;
	height: 1.6em;
	border-radius: 100%;
	background-color: #A79C90;
	color: white;
	z-index: 2;
}

.phrise .item.finished>.number {
	background-color: #D97A2B;
}

.phrise .item::before {
	z-index: 1;
	display: block;
	content: "";
	position: absolute;
	width: 100%;
	top: 2.3em;
}

.phrise .item.finished::before {
	border: 1px solid #D97A2B;
}

.phrise .item:not(.finished)::before {
	border: 1px solid #A79C90;
}

.description {
	font-size: smaller;
}

@media (max-width: 1300px) {
	.phrise {
		flex-direction: column;
		align-items: center;
	}

	.phrise .item {
		flex-direction: row-reverse;
		max-width: none;
	}

	.phrise .item>div {
		max-width: 200px;
	}

	.phrise .item .number {
		display: block;
		width: 50px;
		height: 50px;
	}

	.phrise .item::before {
		height: 100%;
		width: 0;
		top: 0;
		right: 2.3em;
	}
}
</style>