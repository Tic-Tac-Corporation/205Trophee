<script setup>
import FollowItem from './FollowItem.vue';
</script>

<template>
	<footer class="text-padding">
		<div class="title-container">
			<h1 class="russo-one">205 DTF</h1>
			<p>
				Suivez la préparation de notre Peugeot 205, les coulisses du projet et notre aventure sur les pistes marocaines. Une aventure humaine, mécanique et technologique à partager ensemble.
			</p>
		</div>

		<div class="links">
			<h2 class="russo-one">Liens</h2>
			<a href="https://205trophee.com/">Site Officiel</a>
		</div>

		<div class="follow">
			<h2 class="russo-one">Nous Suivre</h2>
			<div class="follow-items-container">
				<FollowItem title="Instagram" />
				<FollowItem title="Trello" />
				<FollowItem title="Twitch" />
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	background-color: #141414;
	display: flex;
	flex-wrap: wrap;
	gap: 5em;
	justify-content: space-between;
	color: white;
}

footer > div {
	display: flex;
	flex-direction: column;
	gap: 1.6em;
}

div.title-container {
	max-width: 500px;
}

div.links a {
	font-size: smaller;
}

div.follow {
	max-width: 500px;
	width: 100%;
}

div.follow div.follow-items-container {
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
}
</style>
