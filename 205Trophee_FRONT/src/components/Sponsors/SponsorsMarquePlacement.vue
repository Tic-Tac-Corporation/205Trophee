<script setup>
</script>

<template>
	<hr>
	<div class="soutien-container text-padding">
		<h2>Votre marque <span class="text-orange">à nos côtés</span></h2>
		<br>
		<div class="WARNING">FAUT DES IMAGES ICI</div>
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
	max-width: calc(25% - 2em);
	min-width: 250px;
	position: relative;
}

.item h4 {
	max-width: 150px;
}

.item div.status {
	padding: 0.2em 0.7em;
	margin-top: 0.7em;
	border-radius: 0.3em;
	text-transform: uppercase;
	font-weight: bold;
	font-size: smaller;
}

.item div.status.pending {
	background-color: rgba(128, 128, 128, 0.3);
}

.item div.status.finance {
	background-color: var(--color-orange);
	color: white;
}

.item div.status.waiting-for-contribution {
	background-color: rgba(217, 122, 40, 0.3);
}

@media (max-width: 1440px) {
	.items-container {
		flex-wrap: wrap;
	}

	.item h4 {
		max-width: none;
	}
}
</style>