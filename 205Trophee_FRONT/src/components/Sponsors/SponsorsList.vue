<script setup>
import IconHandshake from '../SVG/IconHandshake.vue';

</script>

<template>
	<div class="list-main-container text-padding">
		<div class="title-container">
			<h2>Les <span class="text-orange">premiers partenaires</span> <br>de l'aventure</h2>
			<div class="orange">Et si la première collaboration était la vôtre ?</div>
			<button class="orange">Echangeons sur le projet</button>
		</div>

		<div class="list-container">
			<div class="logo-icon-container">
				<IconHandshake :size="120" fill="var(--color-text)" />
			</div>
			<div class="sponsors-logo-container">
				<div class="empty"></div>
				<div class="empty"></div>
				<div class="empty"></div>
				<div class="empty"></div>
				<div class="empty"></div>
				<div class="empty"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.list-main-container {
	display: flex;
	justify-content: space-between;
}

.title-container {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
}

.title-container>* {
	width: fit-content;
}

div.orange {
	color: var(--color-orange);
	font-weight: bold;
}

button {
	padding: 0.7em 1em;
	border: none;
	background-color: var(--color-orange);
	color: white;
	border-radius: 0.5em;
	display: flex;
	align-items: center;
	gap: 0.7em;
	text-transform: uppercase;
	cursor: pointer;
}

.list-container {
	border: 1px dashed var(--color-text);
	border-radius: 0.7em;
	width: 70%;
	min-height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	gap: 2em;
}

.logo-icon-container {
	background-color: rgba(128, 128, 128, 0.3);
	width: 140px;
	height: 140px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
}

.sponsors-logo-container {
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	flex-wrap: wrap;
	gap: 1em;
}

.sponsors-logo-container .empty {
	width: 100px;
	height: 100px;
	border: 1px dashed var(--color-text);
	border-radius: 100%;
}

@media (max-width: 1024px) {
	.list-main-container {
		flex-direction: column;
		gap: 3em;
	}

	.list-container {
		width: 100%;
	}

	h2 br {
		content: " ";
		display: none;
	}
}
</style>