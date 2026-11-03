<script setup>
import IconCar from '../SVG/IconCar.vue';
import IconChecklist from '../SVG/IconChecklist.vue';
import IconRaceFlag from '../SVG/IconRaceFlag.vue';
import IconTool from '../SVG/IconTool.vue';

</script>

<template>
	<div class="preparation-container text-padding">
		<h2>Comment est organisé notre <span class="text-orange">tableau de suivi ?</span></h2>
		<p>
			Pour suivre l'avancement de la préparation de notre Peugeot 205, nous utilisons un tableau Trello organisé
			autour de quatre catégories complétmentaires. Chaque carte représente une tâche, un échange ou une étape
			importante du projet, avec des photos, des descriptions et un état d'avencement.
		</p>
		<br>
		<div class="cards-container">
			<div class="card">
				<div class="title">
					<IconRaceFlag fill="var(--color-text)" />
					<h4>Jalons</h4>
				</div>
				<p>
					Les grandes étapes du projet qui
					rythment la préaparation de la 205.
					Ils nous permettent de suivre l'avancement
					global et de valider chaque phase avant
					de passer à la suivante.
				</p>
			</div>

			<div class="card">
				<div class="title">
					<IconTool fill="var(--color-text)" />
					<h4>Préparation mécanique</h4>
				</div>
				<p>
					Toutes les opérations de remise en état,
					d'entretien et de fiabilisation du véhicule.
					L'objectif est d'obtenir une 205 saine,
					robuste et capable d'affronter plusieurs
					milliers de kilomètres.
				</p>
			</div>

			<div class="card">
				<div class="title">
					<IconCar fill="var(--color-text)" />
					<h4>Préparation au RAID</h4>
				</div>
				<p>
					L'adaptation de la voiture aux contraintes
					du 205 Trophée : protection, sécurité,
					automnomie et équipements spécifiques
					pour les pistes marocaines, en couservant
					une philosophie simple et réparable.
				</p>
			</div>

			<div class="card">
				<div class="title">
					<IconChecklist fill="var(--color-text)" />
					<h4>Tests et validation</h4>
				</div>
				<p>
					Des essais routiers et tout-terrain pour
					valider les différentes modifications,
					vérifier la fiabilité des équipements
					et identifer d'éventuels point d'amélioration
					avant le départ.
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.cards-container {
	display: flex;
	gap: 2em;
}

.cards-container .card {
	padding: 1em;
	border: 1px solid var(--color-border);
	border-radius: 0.7em;
}

.cards-container .card .title {
	display: flex;
	gap: 1em;
	margin-bottom: 0.7em;
}

@media (max-width: 1370px) {
	.cards-container {
		flex-wrap: wrap;
	}
}
</style>