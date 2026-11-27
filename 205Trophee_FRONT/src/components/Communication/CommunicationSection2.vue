<script setup>
import IconCamera from '../SVG/IconCamera.vue';
import IconCar from '../SVG/IconCar.vue';
import IconChecklist from '../SVG/IconChecklist.vue';
import IconDatabase from '../SVG/IconDatabase.vue';
import IconRaceFlag from '../SVG/IconRaceFlag.vue';
import IconSatellite from '../SVG/IconSatellite.vue';
import IconTabletAndPhone from '../SVG/IconTabletAndPhone.vue';
import IconTool from '../SVG/IconTool.vue';

</script>

<template>
	<div class="section2-main-container text-padding">
		<h4 class="center text-orange">Le système en quatre étapes</h4>
		<h2>Du terrain jusqu'à vous</h2>
		<br>
		<div class="section2-container">
			<div class="card">
				<div class="title">
					<IconCamera fill="white" />
					<div>
						<h3>Filmer</h3>
						<h4 class="text-orange">2 Caméras</h4>
					</div>
				</div>
				<p>
					Une caméra extérieure filme la route tandis qu'une seconde caméra capture la vue cockpit depuis
					l'habitacle.
				</p>
			</div>

			<div class="card">
				<div class="title">
					<IconDatabase fill="white" />
					<div>
						<h3>Enregistrer</h3>
						<h4 class="text-orange">2 To en local</h4>
					</div>
				</div>
				<p>
					Les images sont centralisées par deux serveurs ZimaBoard et enregistrées sur un disque de 2 To, même
					lorsque la connexion Starlink est interrompue.
				</p>
			</div>

			<div class="card">
				<div class="title">
					<IconSatellite fill="white" />
					<div>
						<h3>Transmettre</h3>
						<h4 class="text-orange">Starlink</h4>
					</div>
				</div>
				<p>
					La liaison satellite transporte le flux vidéo depuis la Peugeot jusqu'au serveur physique installé
					en France.
				</p>
			</div>

			<div class="card">
				<div class="title">
					<IconTabletAndPhone fill="white" />
					<div>
						<h3>Communiquer et contrôler</h3>
						<h4 class="text-orange">Tablette + AudioCodes</h4>
					</div>
				</div>
				<p>
					La tablette installée devant la place passager permet de contrôler le système. Un poste analogique
					relié à une passerelle AudioCodes assure la téléphonie via un trunk SIP.
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.section2-main-container {
	background-color: #141414;
	background-image: url(@/assets/topographie.png);
	color: white;
}

.section2-container {
	display: flex;
	gap: 1em;
}

h2 {
	text-align: left;
}

.section2-container .card {
	padding: 1em;
	border: 1px solid var(--color-border);
	border-radius: 0.7em;
	background-color: var(--color-border);
}

.section2-container .card .title {
	display: flex;
	gap: 1em;
	margin-bottom: 0.7em;
}

@media (max-width: 1370px) {
	.section2-container {
		flex-wrap: wrap;
	}

	.section2-container .card {
		width: 100%;
	}

	h2,
	h4.center {
		text-align: center;
	}
}
</style>