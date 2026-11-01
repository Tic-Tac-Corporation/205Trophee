<template>
	<div class="competences-container text-padding">
		<div class="text-container">
			<div>
				<h2>Deux amis, une même passion</h2>
				<p>
					Amis depuis de nombreuses années, nous avons toujours partagé le goût des projets techniques, des
					voyages et des sports mécaniques.
					<div class="thin-br" />
					Le 205 Trophée 2027 représente aujourd'hui l'occasion de réunir ces passions autour d'un objectif
					commun : préparer une Peugeot 205, traverser les pistes marocaines et mener à bien une aventure
					humaine dont nous nous souviendrons longtemps.
					<div class="thin-br" />
					Grâce à nos compétences complémentaires en télécommunications, réseaux et mécanique, nous
					construisons ce projet ensemble, de l'atelier jusqu'aux dunes du désert.
				</p>
			</div>

			<div class="image-container">
				<img src="@/assets/friends.jpg" alt="">
			</div>
		</div>
	</div>
</template>

<style scoped>
.competences-container {
	border-bottom: 1px solid rgba(111, 88, 70, 0.3);
}

.text-container {
	display: flex;
	gap: 2em;
	align-items: center;
}

@media (max-width: 1300px) {
	.text-container {
		flex-wrap: wrap;
		justify-content: center;
	}
}

.image-container img {
	border-radius: 0.7em;
	max-width: 90vw;
	max-height: 250px;
}
</style>