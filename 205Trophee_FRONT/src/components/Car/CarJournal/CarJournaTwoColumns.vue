<script setup>
import CarJournalPrepCard from './CarJournalPrepCard.vue';
import { onMounted, ref, toRefs, watch, watchEffect } from 'vue';

const props = defineProps({
	preps: {
		type: Array,
		required: true,
	},
});

const columnNumber = ref(0);
const prepsList = ref({
	firstColumn: [],
	lastColumn: []
});


const buildPrepsList = () => {
	(props.preps ?? []).forEach((prep, index) => {
		if (index % 2 === 0) prepsList.value.firstColumn.push(prep);
		else prepsList.value.lastColumn.push(prep);
	})

	columnNumber.value = Math.max(0, Math.max(prepsList.value.firstColumn.length, prepsList.value.lastColumn.length) - 1);


	console.log('buildPrepsList');
	console.log(columnNumber.value);

}


watch(props.preps, buildPrepsList)
onMounted(buildPrepsList);
</script>

<template>
	<div class="journal-display-container">
		<table>
			<tr v-for="i in Math.ceil(preps.length / 2)" :key="i">
				<td>
					<CarJournalPrepCard v-if="preps[(i - 1) * 2]" :prep="preps[(i - 1) * 2]"
						type="before" />
				</td>
				<td></td>
				<td>
					<CarJournalPrepCard v-if="preps[(i - 1) * 2 + 1]" :prep="preps[(i - 1) * 2 + 1]"
						type="after" />
				</td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
.journal-display-container {
	margin-top: 2em;
	margin-bottom: 2em;
}

.journal-display-container table {
	border-spacing: 0;
}

.journal-display-container table tr td:not(:nth-child(2)) {
	max-width: 42vw;
	min-width: 30vw;
}

.journal-display-container table tr td:nth-child(2) {
	width: 10em;
	position: relative;
}

.journal-display-container table tr td:nth-child(2)::before {
	content: "";
	display: block;
	border: 3px solid #D97A28;
	width: 1px;
	height: 100%;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}

.journal-display-container table tr:first-child td:nth-child(2)::before {
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	height: 120%;
	top: -20%;
}

.journal-display-container table tr:last-child td:nth-child(2)::before {
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	height: 120%;
}

.journal-display-container table tr td:last-child {
	position: relative;
	top: 45px;
}
</style>