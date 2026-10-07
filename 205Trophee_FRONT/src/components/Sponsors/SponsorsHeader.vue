<script setup>
import IconCar from '../SVG/IconCar.vue';
import IconDownload from '../SVG/IconDownload.vue';
import IconMail from '../SVG/IconMail.vue';

</script>

<template>
	<header>
		<div class="header-background">
			<div class="header-title">
				<div class="russo-one">
					Construisons
					<br>
					<span>L'aventure ensemble</span>
				</div>
				<div class="header-subtitle">
					<br>
					Notre projet recherche ses premiers partenaires<br>
					pour accompagner la préparation de la Peugeot 205,<br>
					la participation au raid et le partage de l'aventure.
				</div>
				<div class="btns">
					<br>
					<button class="btn-orange">
						Devenir partenaire
					</button>
					<button>
						<IconDownload :size="20" fill="#FFFFFF" />
						<div>Télécharger le dossier</div>
					</button>
					<button>
						<IconMail :size="20" fill="#FFFFFF" />
						<div>Nous contacter</div>
					</button>
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
	color: white;
	margin-left: 1.5em;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	line-height: 1.2em;
}

header .header-title .header-subtitle,
header .header-title .btns {
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

header .header-title .btns {
	display: flex;
	flex-direction: column;
	gap: 1em;
	max-width: 330px;
}

button {
	padding: 0.7em 1em;
	border: 1px solid rgba(255, 255, 255, 0.5);
	background-color: transparent;
	color: white;
	border-radius: 0.5em;
	display: flex;
	align-items: center;
	gap: 0.7em;
	font-size: 110%;
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.1s ease-in-out;
}

button.btn-orange {
	background-color: var(--color-orange);
	border: 1px solid transparent;
	justify-content: center;
}

button:hover {
	border-color: var(--color-orange);
}
</style>