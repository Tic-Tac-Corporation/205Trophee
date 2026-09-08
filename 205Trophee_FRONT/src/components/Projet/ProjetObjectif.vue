<script setup>
</script>

<template>
	<div class="objectifs-main-container text-margin">
		<div class="objectifs-container">
			<div>
				<h1>Le 205 Trophée,<br>Bien plus qu'un Raid</h1>
				<p>
					Notre objectif est de préparer une Peugeot 205 simple, fiable et adaptée aux exigences des pistes
					marocaines, puis de l'emmener jusqu'au bout du raid.
					<br>
					Cette aventure représente un défi complet : remettre en état et fiabiliser la voiture, organiser
					notre
					participation, concevoir les équipements embarqués et partager chaque étape du projet avec le public
					et
					nos partenaires.
					<br>
					Plus qu'une perfomance sportive, nous souhaitons vivre une expérience humaine faite d'apprentissage,
					d'entraide, de dévouverte et de dépassement de soi.
				</p>
			</div>
			<div>
				<img src="@/assets/205_en_travaux.png" alt="">
			</div>
		</div>

		<div class="citation">
			<span class="orange">“</span>
			<div>
				<div>Notre ligne directrice :</div>
				<div>faire simple, fiable et réparable.</div>
			</div>
			<span class="orange">”</span>
		</div>
	</div>
</template>

<style scoped>
.objectifs-container {
	display: flex;
	gap: 2em;
	align-items: center;
}

@media (max-width: 1300px) {
	.objectifs-container {
		flex-wrap: wrap;
	}
}


.citation {
	font-style: italic;
	display: flex;
	gap: 1em;
	margin-top: 1.5em;
	font-size: 1.5em;
}

@media (max-width: 630px) {
	.citation {
		margin-bottom: 1em;
	}
}

.citation > span {
	max-height: 130px;
}

.citation>span:first-child {
	position: relative;
	bottom: 0.5em;
}

.citation>span:last-child {
	position: relative;
	bottom: 0em;
}

.citation>div {
	margin-left: 1em;
}

.orange {
	color: #D97A28;
	font-size: 5em;
	font-weight: bold;
	text-align: center;
}

@media (max-width: 1024px) {
	.orange {
		font-size: 2.5em;
	}
}

img {
	border-radius: 0.7em;
	max-width: 90vw;
}
</style>