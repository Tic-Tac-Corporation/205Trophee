<script setup>
import IconBook from '../SVG/IconBook.vue';
import IconCamera from '../SVG/IconCamera.vue';
import IconCompass from '../SVG/IconCompass.vue';
import IconEngine from '../SVG/IconEngine.vue';
import IconTire from '../SVG/IconTire.vue';

const items = [
	{
		icon: IconEngine,
		title: "Fiabiliser la 205",
		text: "Pièces, entretien, freinage et trains roulants"
	},
	{
		icon: IconTire,
		title: "Adapter la voiture au raid",
		text: "Protections, pneumatiques, galerie et sécurité."
	},
	{
		icon: IconCamera,
		title: "Partager l'aventure",
		text: "Caméras, enregistrement, diffusion et site internet."
	},
	{
		icon: IconCompass,
		title: "Participer au raid",
		text: "Inscription, transport, carburant et vie sur place"
	},
	{
		icon: IconBook,
		title: "Soutenir l'action solidaire",
		text: "Fournitures scolaires et matériel éducatif."
	}
];
</script>

<template>
	<div class="soutien-container text-padding">
		<h2>Votre soutien <span class="text-orange">devient concret</span></h2>
		<br>
		<div class="items-container">
			<div class="item" v-for="(item, index) in items" :key="index">
				<div class="icon">
					<component :is="item.icon" :size="50"  fill="#FFFFFF" />
				</div>
				<h4>{{ item.title }}</h4>
				<p>{{ item.text }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.soutien-container {
	background-color: #141414;
	background-image: url(@/assets/topographie.png);
	color: white;
}

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

@media (max-width: 1440px) {
	.items-container {
		flex-wrap: wrap;
	}
}
</style>