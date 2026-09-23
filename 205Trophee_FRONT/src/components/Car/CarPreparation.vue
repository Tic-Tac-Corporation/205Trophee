<script setup>
import preparation from '@/utils/preparation.js';
import ProgressBar from '../ProgressBar.vue';
</script>

<template>
	<div class="preparation-container text-padding">
		<div class="title-container">
			<h2>Où en est<br> la préparation ?</h2>
		</div>

		<div class="item-container">
			<div class="item" v-for="prep in preparation" :key="prep.id">
				<h4>{{ prep.title }}</h4>
				<p>{{ prep.description }}</p>
				<div class="progress-bar-container">
					<ProgressBar :progress="prep.pct" />
				</div>
				<div class="status">{{ prep.status }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.preparation-container {
	background-color: #141414;
	background-image: url(@/assets/topographie.png);
	color: white;
	display: flex;
	gap: 5em;
}

.title-container {
	white-space: nowrap;
}

.item-container {
	display: flex;
	gap: 2em;
	justify-content: space-around;
}

.item-container .item {
	display: flex;
	flex-direction: column;
	padding: 1em;
	border: 1px solid rgba(255, 255, 255, 0.4);
	border-radius: 0.5em;
}

.item-container .item p {
	font-size: smaller;
	margin-bottom: 1em;
}

.item-container .item div.progress-bar-container {
	margin-top: auto;
}

.item-container .item div.status {
	margin-top: 0.5em;
	font-size: smaller;
	text-transform: uppercase;
	text-align: center;
}

@media (max-width: 1440px) {
	.preparation-container {
		flex-wrap: wrap;
		gap: 2em;
	}
}

@media (max-width: 1024px) {
	.item-container {
		flex-wrap: wrap;
		gap: 2em;
	}

	.item-container div.item {
		width: 80%;
	}
}
</style>