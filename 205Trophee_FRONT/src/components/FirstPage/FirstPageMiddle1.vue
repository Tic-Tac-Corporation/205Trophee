<script setup>
import Card from '../SecondPage/Card.vue';

</script>

<template>
	<div class="container">
		<div class="cards-container">
			<Card title="Le Projet" backgroundUrl="le_projet.jpg" link="/project" />
			<Card title="La Préparation" backgroundUrl="preparation.jpg" link="/car" />
			<Card title="Le Système de Diffusion" backgroundUrl="IMG_4153.jpeg" link="/com" />
		</div>
        <br>
        <div class="cards-container">
			<Card title="Les Sponsors" backgroundUrl="apatine.jpg" link="/sponsors" />
			<Card title="La Boutique" backgroundUrl="autocollant-officiel-205-PAYSAGE.jpg" link="/shop" />
		</div>
	</div>
</template>

<style scoped>
.container {
	padding: 5%;
}

.cards-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3em;
}

h1 {
	margin-bottom: 1.5em;
}

@media (max-width: 1024px) and (min-width: 574px) {
	.container {
		margin-top: 6em;
	}
}

@media (max-width: 573px) {
	.container {
		margin-top: 12em;
	}
}
</style>
