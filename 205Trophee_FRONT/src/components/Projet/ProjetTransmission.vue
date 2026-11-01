<script setup>
import IconCompass from '../SVG/IconCompass.vue';
import IconTool from '../SVG/IconTool.vue';
import IconWifi from '../SVG/IconWifi.vue';
</script>

<template>
	<div class="transmission-main-container text-padding">
		<div class="histoire-container">
			<div>
				<h2>Une histoire de transmission</h2>
				<p>
					Cette Peugeot 205 n'a pas été choisie au hasard. Ancienne voiture du grand-père d'un membre de
					l'équipage, elle représente une histoire familiale que nous souhaitons prolonger à travers ce
					projet.
					<div class="thin-br" />
					Après plusieurs années sur les routes de l'Isère, elle s'apprête désormais à découvrir les pistes
					marocaines.
					<div class="thin-br" />
					Notre objectif n'est pas de la transformer en véhicule de compétition, mais de préserver son esprit
					d'origine tout en la préparant pour relever ce nouveau défi.
				</p>
			</div>

			<div class="image-container">
				<img src="@/assets/205_avant_travaux.jpg" alt="">
				<RouterLink to="/car">Voir la préparation de la 205</RouterLink>
			</div>
		</div>

		<br>

		<div class="items-container">
			<div class="item">
				<IconCompass fill="#FFFFFF" :size="150" />
				<div>
					<h3>L'AVENTURE</h3>
					Traverser le Maroc au volant d'une Peugeot 205, découvrir de nouveaux paysages et vivre une expérience inspirée des grands rallyes-raids.
				</div>
			</div>

			<div class="item">
				<IconTool fill="#FFFFFF" :size="150" />
				<div>
					<h3>Le défi mécanique</h3>
					Préparer et fiabiliser un véhicule de près de 40 ans afin qu'il puisse parcourir plusieurs milliers de kilomètres dans des conditions exigeantes.
				</div>
			</div>

			<div class="item">
				<IconWifi fill="#FFFFFF" :size="150" />
				<div>
					<h3>LE PARTAGE</h3>
					Faire vivre cette aventure à nos proches, nos partenaires et notre communauté grâce aux contenus publiés avant, pendant et après le raid.
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.transmission-main-container {
	background-color: #141414;
	background-image: url(@/assets/topographie.png);
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
	background-color: var(--color-orange);
	color: white;
	font-size: smaller;
}

.items-container {
	display: flex;
	justify-content: space-evenly;
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
	background-color: var(--color-orange);
}
</style>