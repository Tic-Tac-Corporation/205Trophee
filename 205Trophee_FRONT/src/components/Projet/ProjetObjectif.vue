<script setup>
</script>

<template>
	<div class="objectifs-main-container text-margin">
		<div class="objectifs-container">
			<div>
				<h2>Le 205 Trophée,<br>Des Terres Froides au Désert Marocain</h2>
				<p>
					Le 205 Trophée n'est pas une course de vitesse, mais une aventure d'orientation et d'endurance à
					travers les pistes marocaines.
					<div class="thin-br" />
					À bord d'une Peugeot 205 préparée par nos soins, notre objectif est de rejoindre l'arrivée en
					privilégiant la fiabilité, l'entraide et l'adaptation aux conditions du terrain.
					<div class="thin-br" />
					Au-delà du défi mécanique, cette aventure représente une expérience humaine unique, faite de
					rencontres, de dépassement de soi et de solidarité.
				</p>
				<div class="citation">
					<span class="orange">“</span>
					<div>
						<div>Notre ligne directrice :</div>
						<div>faire simple, fiable et réparable.</div>
					</div>
					<span class="orange">”</span>
				</div>
			</div>
			<div class="img-container">
				<img src="@/assets/205_table_orientation.jpg" alt="">
			</div>
		</div>


	</div>
</template>

<style scoped>
.objectifs-container {
	display: flex;
	gap: 2em;
	align-items: center;
}


.citation {
	font-style: italic;
	display: flex;
	gap: 1em;
	margin-top: 1.5em;
	font-size: 1.5em;
	justify-content: center;
}

@media (max-width: 630px) {
	.citation {
		margin-bottom: 1em;
	}
}

.citation>span {
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
	color: var(--color-orange);
	font-size: 5em;
	font-weight: bold;
	text-align: center;
}

.img-container {
	max-height: 40vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.7em;
}

img {
	max-width: 40vw;
}

@media (max-width: 1024px) {
	.orange {
		font-size: 2.5em;
	}
}


@media (max-width: 1300px) {
	.objectifs-container {
		flex-wrap: wrap;
	}

	.img-container,
	img {
		max-width: 90vw;
	}
}
</style>