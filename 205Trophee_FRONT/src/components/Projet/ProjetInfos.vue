<script setup>
import IconCamera from '../SVG/IconCamera.vue';
import IconCar from '../SVG/IconCar.vue';
import IconEuro from '../SVG/IconEuro.vue';
import IconGroup from '../SVG/IconGroup.vue';


</script>

<template>
	<div class="projet-infos text-margin">
		<div class="info">
			<IconGroup :size="60" />
			<div>
				<div class="number">2</div>
				<div>Membres D'équipage</div>
			</div>
		</div>

		<div class="info">
			<IconCar :size="60" />
			<div>
				<div class="number">1</div>
				<div>Peugeot 205</div>
			</div>
		</div>

		<div class="info">
			<IconEuro :size="60" />
			<div>
				<div class="number">13 000 €</div>
				<div>Budget Prévisionnel</div>
			</div>
		</div>

		<div class="info">
			<IconCamera :size="60" />
			<div>
				<div class="number">2 Caméras 4K</div>
				<div>Pour partager l'aventure</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.projet-infos {
	display: flex;
	flex-wrap: wrap;
	gap: 2em;
	justify-content: space-around;
	position: relative;
	bottom: 2.5em;
	background-color: white;
	-webkit-box-shadow: 0px 0px 15px -5px #000000;
	box-shadow: 0px 0px 15px -5px #000000;
	border-radius: 7px;
}

.info {
	display: flex;
	align-items: center;
	gap: 1.3em;
	padding: 0.7em;
	text-transform: uppercase;
}

.info .number {
	color: #D97A28;
	font-size: xx-large;
	font-weight: bold;
	text-align: center;
}

.info .number ~ div {
	position: relative;
	top: -0.7em;
	font-size: small;
}
</style>