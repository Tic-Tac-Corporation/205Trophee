<script setup>
import preparation from '@/utils/preparation.js';
import ProgressBar from '../ProgressBar.vue';

const moyennePreparation = Object.values(preparation).reduce((acc, item) => acc + item.pct, 0) / Object.values(preparation).length;
</script>

<template>
	<header>
		<div class="header-background">
			<div class="header-title">
				<div class="russo-one">
					une 205,
					<br>
					une <span>histoire</span>
					<br>
					à continuer
				</div>
				<div class="header-subtitle">
					<br>
					Ancienne voiture familiale, notre peugeot 205 <br>
					gris Zénith se pérapre auourd'hui à quitter <br>
					les routes des Terres Froides pour affronter <br>
					les pistes marocaines.
					<br><br>
					Préparation en cours<br>
				</div>
				<ProgressBar :progress="moyennePreparation" :width="60" />
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
	margin-left: 2em;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	line-height: 1.2em;
}

header .header-title .header-subtitle {
	font-size: medium;
	font-weight: normal;
	text-shadow: none;
	line-height: normal;
}

header .header-title span {
	color: #D97A28;
}

@media (max-width: 1024px) {
	header .header-title {
		margin-left: 1em;
		font-size: 3em;
	}
}
</style>