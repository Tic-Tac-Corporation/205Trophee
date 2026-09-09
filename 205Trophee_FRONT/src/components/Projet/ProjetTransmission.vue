<script setup>
import IconCompass from '../SVG/IconCompass.vue';
import IconTool from '../SVG/IconTool.vue';
import IconWifi from '../SVG/IconWifi.vue';

</script>

<template>
	<div class="transmission-main-container text-padding">
		<div class="histoire-container">
			<div>
				<h1>Une histoire de transmission</h1>
				<p>
					Cette Peugeot 205 n'a pas été choisie au hasard. Ancienne voitire du grand-père d'un des membres de
					l'équipage, elle a été conservée avec l'envie de lui offrir une nouvelle histoire.
					<br><br>
					Après plusieurs années sur les routes d'Isére, elle se prépare aujourd'hui à quitter les Terres
					Froides pour affonter un terrain totalement diférent : les pistes marocaines.
					<br><br>
					Notre ambition n'est pas de la transformer en prototype de compétition, mais de préserver son
					identité tout en réalisant une préparation cohérente, robuste et accessible.
				</p>
			</div>

			<div class="image-container">
				<img src="@/assets/205_objectif.webp" alt="">
				<RouterLink to="/car">Voir la préparation de la 205</RouterLink>
			</div>
		</div>

		<br>

		<div class="items-container">
			<div class="item">
				<IconCompass fill="#FFFFFF" :size="150" />
				<div>
					<h3>L'AVENTURE</h3>
					Sortir de notre quotidien,<br>
					parcourir de nouveaux territoires<br>
					et vivre une expérience inspirée<br>
					des grands rallyes-raids.
				</div>
			</div>

			<div class="item">
				<IconTool fill="#FFFFFF" :size="150" />
				<div>
					<h3>Le défi mécanique</h3>
					Préparer nos-mêmes une 205 fiable,<br>
					comprendre chaque modification et<br>
					privilégier des solutions simples et<br>
					réparables sur le terrain.
				</div>
			</div>

			<div class="item">
				<IconWifi fill="#FFFFFF" :size="150" />
				<div>
					<h3>L'AVENTURE</h3>
					Faire vivre le projet au-delà de<br>
					l'équipage grâce aux images<br>
					embarquées, aux retransmissions<br>
					en direct et aux contenus publiés<br>
					tout au long de l'aventure.
				</div>
			</div>
		</div>

	</div>
</template>

<style scoped>
.transmission-main-container {
	background-color: #141414;
	background-image: url(@/assets/topographie.png);
	border-bottom: 1px solid white;
	color: white;
}

.histoire-container {
	display: flex;
	gap: 2em;
	align-items: center;
}

@media (max-width: 1300px) {
	.histoire-container {
		flex-wrap: wrap;
		justify-content: center;
	}
}

.image-container {
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: center;
}

.image-container img {
	border-radius: 0.7em;
	max-width: 90vw;
	max-height: 250px;
}

.image-container a {
	padding: 0.5em 0.7em;
	border-radius: 0.5em;
	border: none;
	text-transform: uppercase;
	background-color: #D97A28;
	color: white;
	font-size: smaller;
}

.items-container {
	display: flex;
	justify-content: space-between;
	gap: 1.2em 3em;
}

@media (max-width: 1070px) {
	.items-container {
		flex-wrap: wrap;
		justify-content: center;
	}
}

.items-container .item {
	display: flex;
	align-items: center;
	gap: 1em;
	padding: 0.5em;
	font-size: smaller;
	border-radius: 0.5em;
}

.items-container .item:nth-child(2n+1) {
	border: 1px solid rgba(255, 255, 255, 0.4);
}

.items-container .item:nth-child(2n) {
	background-color: #D97A28;
}
</style>