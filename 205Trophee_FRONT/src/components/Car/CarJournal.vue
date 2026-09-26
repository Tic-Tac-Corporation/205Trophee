<script setup>
import { ref } from 'vue';
import preparations from '@/utils/preparation.js';
import steps from '@/utils/preparationSteps.js';
import { useWindowSize } from '@vueuse/core'
import CarJournaTwoColumns from './CarJournal/CarJournaTwoColumns.vue';
import CarJournalOneColumn from './CarJournal/CarJournalOneColumn.vue';

const { width } = useWindowSize()
const list = ref([...preparations]);
const stepsNames = Object.keys(steps);
const selectedStepName = ref('all');

const checkStepNameExists = (stepName) => {
	return stepName === 'all' || stepsNames.includes(stepName);
}

const getList = (stepName) => {
	// StepName inconnu
	if (!checkStepNameExists(stepName)) return list.value = [];

	selectedStepName.value = stepName;

	// On veut tout voir
	if (stepName === 'all') return list.value = [...preparations];

	// Step en particulier
	list.value = [...preparations].filter((prep) => {
		return prep.step === steps[stepName];
	})
}
</script>

<template>
	<hr>
	<div class="journal-container text-padding">
		<h2>Le journal de la préparation</h2>

		<div class="btn-container">
			<button @click="getList('all')" :class="{ selected: selectedStepName === 'all' }">TOUT</button>
			<button v-for="stepName in stepsNames" @click="getList(stepName)"
				:class="{ selected: selectedStepName === stepName }">{{ stepName }}</button>
		</div>

		<br>

		<div class="journal-display-container" v-if="list">
			<CarJournaTwoColumns v-if="width > 1300" :preps="list" />
			<CarJournalOneColumn v-else :preps="list" />
		</div>
		<div v-if="list.length <= 0">Aucune préparation</div>
	</div>
</template>

<style scoped>
@media (min-width: 1300px) {
	.journal-display-container {
		display: flex;
		justify-content: center;
	}
}

.btn-container {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;
}

.btn-container button {
	text-transform: uppercase;
	padding: 0.5em 0.7em;
	border-radius: 0.5em;
	border: none;
	outline: none;
	cursor: pointer;
}

.btn-container button.selected {
	background-color: #5D8FA8;
	color: white;
}
</style>