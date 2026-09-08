<script setup>
import Card from '../SecondPage/Card.vue';

</script>

<template>
	<div class="container">
		<h1>OUI</h1>
		<div class="cards-container">
			<Card title="Le Projet" backgroundUrl="205trophee.jpg" link="/project" />
			<Card title="La 205" backgroundUrl="205.jpg" link="/car" />
			<Card title="La Com'" backgroundUrl="communication.jpg" link="/com" />
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
