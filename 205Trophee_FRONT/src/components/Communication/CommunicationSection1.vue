<script setup>
</script>

<template>
	<div class="text-padding">
		<div class="communication-container">
			<div>
				<h4 class="text-orange">Notre approche</h4>
				<h2>Partager l'aventure autrement</h2>
				<p>
					Sur les pistes marocaines, les moyens de communication traditionnels ne sont pas toujours
					disponibles. Nous développons donc notre propre installation embarquée afin de filmer l'aventure,
					transmettre les
					images par satellite et conserver un moyen de communication depuis la voiture.
					<div class="thin-br" />
					L'ensemble du système est pensé pour fonctionner de manière autonome. Toutes les images sont
					enregistrées localement ain de préserver les séquences du raid si la connexion Starlink devient
					temporairement indisponible.
				</p>
			</div>
			<img src="@/assets/carrousel/IMG_4153.jpeg" alt="Dispositif de communication embarqué" />
		</div>
	</div>
</template>

<style scoped>
.communication-container {
	display: flex;
	gap: 2em;
	align-items: center;
}

img {
	max-height: 40vh;
	border-radius: 1em;
}

h2 {
	text-align: left;
}

@media (max-width: 1300px) {
	.communication-container {
		flex-wrap: wrap;
		justify-content: center;
	}

	h2,
	h4 {
		text-align: center;
	}
}
</style>