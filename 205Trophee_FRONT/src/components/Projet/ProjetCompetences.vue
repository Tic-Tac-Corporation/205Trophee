<template>
	<div class="competences-container text-padding">
		<div class="text-container">
			<div>
				<h2>Deux amis, des compétences complémentaires</h2>
				<p>
					Amis depuis le collège et originaires des Terres Froides en Isère, nous réunissons nos compétences
					mécaniques, organisationnelles et techniques autour d'un même objectif : préparer notre 205 et
					l'emmener ensemble jusqu'à la ligne d'arrivée.
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