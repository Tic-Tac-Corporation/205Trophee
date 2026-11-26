<script setup>
import IconCrown from '../SVG/IconCrown.vue';
import IconMedal from '../SVG/IconMedal.vue';
import IconStar from '../SVG/IconStar.vue';

</script>

<template>
	<div class="soutien-container text-padding">
		<h2>Nos formules <span class="text-orange">partenaires</span></h2>
		<br>
		<div class="items-container">
			<div class="item">
				<div>
					<IconStar :size="60" fill="#FFFFFF" />
				</div>
				<div>
					<h4>Essentiel</h4>
					<h4>à partir de <span class="text-orange">250 €</span></h4>
					<ul>
						<li>Présence sur nos réseaux sociaux</li>
						<li>Page partenaire site</li>
						<li>Logo sur une zone grise</li>
					</ul>
				</div>
			</div>

			<div class="item">
				<div>
					<IconMedal :size="60" fill="#FFFFFF" />
				</div>
				<div>
					<h4>Soutien</h4>
					<h4>à partir de <span class="text-orange">500 €</span></h4>
					<ul>
						<li>Formule essentielle</li>
						<li>Logo sur une zone bleue</li>
						<li>Présence sur nos directs Twitch et Youtube</li>
					</ul>
				</div>
			</div>

			<div class="item">
				<div>
					<IconMedal :size="60" fill="#FFFFFF" />
				</div>
				<div>
					<h4>Premium</h4>
					<h4>à partir de <span class="text-orange">1000 €</span></h4>
					<ul>
						<li>Formule soutien</li>
						<li>Logo sur une zone orange</li>
						<li>Présence sur les tenues</li>
					</ul>
				</div>
			</div>

			<div class="item">
				<div>
					<IconCrown :size="60" fill="#FFFFFF" />
				</div>
				<div>
					<h4>Partenaire</h4>
					<h4>à partir de <span class="text-orange">1500 €</span></h4>
					<ul>
						<li>Formule premium</li>
						<li>Emplacement principal en zone violette</li>
						<li>Mise en avant dédié sur site</li>
						<li>Contenues et actions dédiées pendant la préparation du raid</li>
					</ul>
				</div>
			</div>
		</div>

		<br>
		<div class="text-center">
			Chaque collaboration peut être adaptée aux objectifs de l'entreprise et à la nature du
			soutien apporté.
		</div>

		<div class="text-center border-orange text-orange">
			Les ZONES sont présentes dans le dossier
		</div>
	</div>
</template>

<style scoped>
.soutien-container {
	background-color: #141414;
	background-image: url(@/assets/topographie.png);
	color: white;
}

.items-container {
	display: flex;
	justify-content: space-evenly;
	gap: 1em;
}

.item {
	padding: 1em;
	border: 3px solid var(--color-orange);
	border-radius: 0.5em;
	display: flex;
	gap: 2em;
	min-width: 250px;
	position: relative;
}

.item ul {
	font-size: larger;
}

.item:nth-child(1) {
	border-color: grey;
}

.item:nth-child(2) {
	border-color: rgb(109, 109, 255);
}

.item:nth-child(3) {
	border-color: var(--color-orange);
}

.item:nth-child(4) {
	border-color: rgb(218, 0, 218);
}

.border-orange {
	border: 3px solid var(--color-orange);
	border-radius: 0.7em;
	padding: 0.5em;
	margin-top: 0.5em;
}

.item .info {
	background-color: var(--color-orange);
	color: white;
	padding: 0.2em 0.7em;
	text-transform: uppercase;
	font-weight: bold;
	width: fit-content;
	border-radius: 0.4em;
	font-size: smaller;
	margin-bottom: 0.2em;
}

.text-center {
	text-align: center;
	font-size: normal;
}

@media (max-width: 1440px) {
	.items-container {
		flex-wrap: wrap;
	}

	.item {
		width: 100%;
	}
}
</style>