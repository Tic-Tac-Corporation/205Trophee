<script setup>
</script>

<template>
	<header>
		<div class="header-background">
			<div class="header-title">
				<div class="russo-one">
					Des pistes <br>
					aux <span>Écrans</span>
				</div>
				<div class="header-subtitle">
					<br>
					Un système embarqué conçu pour transmettre les images <br>
					du raid, conserver les communications et partager l'aventure <br>
					depuis les pistes marocaines.
				</div>
			</div>

		</div>

	</header>
</template>

<style scoped>
header {
	overflow: hidden;
	max-height: 700px;
}

header .header-background {

	background-image: url('@/assets/projet_header.webp');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 700px;

	display: flex;

	justify-content: flex-start;
	align-items: center;
}

header .header-title {
	text-transform: uppercase;
	font-size: 5em;
	font-weight: bold;
	line-height: 1.2em;
	color: white;
	margin-left: 2em;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

header .header-title .header-subtitle {
	font-size: medium;
	font-weight: normal;
	text-shadow: none;
	line-height: normal;
}

header .header-title span {
	color: var(--color-orange);
}

@media (max-width: 1024px) {
	header .header-title {
		margin-left: 1em;
		font-size: 3em;
	}
}

.btn-twitch {
	background-color: var(--color-orange);
	font-weight: bold;
	padding: 0.5em 1.5em;
	border-radius: 0.5em;
	border: none;
	outline: none;
}

.next-live {
	display: flex;
	gap: 0.7em;
}

.next-live span {
	display: block;
	width: 20px;
	height: 20px;
	background-color: rgb(0, 192, 0);
	border-radius: 100%;
}
</style>