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

const checkStepNameExists = (stepName) => {
	return stepName === 'all' || stepsNames.includes(stepName);
}

const getList = (stepName) => {
	// StepName inconnu
	if (!checkStepNameExists(stepName)) return list.value = [];

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

		<button @click="getList('all')">TOUT</button>
		<button v-for="stepName in stepsNames" @click="getList(stepName)">{{ stepName }}</button>

		<br><br>

		<div class="journal-display-container" v-if="list">
			<CarJournaTwoColumns v-if="width > 1300" :preps="list" />
			<CarJournalOneColumn v-else :preps="list" />
		</div>
		<div v-if="list.length <= 0">Aucune préparation</div>
	</div>
</template>

<style scoped>
.journal-display-container {
	display: flex;
	justify-content: center;
}
</style>