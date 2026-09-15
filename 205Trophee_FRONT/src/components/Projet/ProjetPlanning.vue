<script setup>
import IconCamera from '../SVG/IconCamera.vue';
import IconCar from '../SVG/IconCar.vue';
import IconTool from '../SVG/IconTool.vue';

const phriseItems = [
	{
		title: "Diagnostiquc et démontage",
		icon: IconTool,
		description: "Etat initial et identification des travaux.",
		state: true
	},
	{
		title: "Fiabilisation Mécanique",
		icon: IconTool,
		description: "Moteur, refroidissement, freinage et trains roulants.",
		state: true
	},
	{
		title: "Préparation raid",
		icon: IconCar,
		description: "Réhausse, snorkel, galerie et équipements de sécurité.",
		state: true
	},
	{
		title: "Communication embarquée",
		icon: IconCamera,
		description: "Caméras, enregistrement, transmission et supervision.",
		state: false
	},
	{
		title: "Essais et validation",
		icon: IconTool,
		description: "Test routiers et contrôle de la fiabilité.",
		state: false
	},
	{
		title: "Départ",
		icon: IconTool,
		description: "Acheminement, raid et action solidaire.",
		state: false
	},
];
</script>

<template>
	<div class="planning-main-container text-padding">
		<h1>De l'atelier aux pistes marocaines</h1>

		<br><br>

		<div class="phrise">
			<div :class="{ item: true, finished: item.state }" v-for="(item, number) in phriseItems">
				<div class="number">{{ number + 1 }}</div>
				<div>
					<div class="icon">
						<component :is="item.icon" :size="60" />
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