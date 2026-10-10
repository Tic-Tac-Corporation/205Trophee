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
					<h4>Partenaire</h4>
					<h4 class="text-orange">à partir de 500 €</h4>
					<p>Site internet, réseaux sociaux, passports numériques et visibilité secondaire sur la voiture
						selon les emplacements disponibles.</p>
				</div>
			</div>

			<div class="item border-orange">
				<div>
					<IconMedal :size="60" fill="#FFFFFF" />
				</div>
				<div>
					<div class="info">Formule recommandée</div>
					<h4>Partenaire premium</h4>
					<h4 class="text-orange">à partir de 1000 €</h4>
					<p>Visibilité renforcée sur la voiture, présence dans les directs et publication dédiée.</p>
				</div>
			</div>

			<div class="item">
				<div>
					<IconCrown :size="60" fill="#FFFFFF" />
				</div>
				<div>
					<h4>Partenaire principal</h4>
					<h4 class="text-orange">à partir de 2000 €</h4>
					<p>Emplacement majeur, présence prioritaire dans les directs et mise en avant sur tous les supports.
					</p>
				</div>
			</div>
		</div>

		<br>
		<div class="text-center">Chaque collaboration peut être adaptée aux objectifs de l'entreprise et à la nature du
			soutien apporté.</div>
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
	border: 1px solid rgba(128, 128, 128, 0.3);
	border-radius: 0.5em;
	display: flex;
	gap: 2em;
	min-width: 250px;
	position: relative;
}

.items-container .item:nth-child(2) {
	min-width: 40%;
	border: 1px solid orange;
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
	font-size: smaller;
}

@media (max-width: 1440px) {
	.items-container {
		flex-wrap: wrap;
	}
}
</style>