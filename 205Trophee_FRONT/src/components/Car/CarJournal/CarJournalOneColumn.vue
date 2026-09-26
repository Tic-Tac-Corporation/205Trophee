<script setup>
import { toRefs } from 'vue';
import CarJournalPrepCard from './CarJournalPrepCard.vue';

const props = defineProps({
	preps: {
		type: Array,
		required: true,
	},
});

</script>

<template>
	<div class="journal-display-container" v-if="preps.length > 0">
		<CarJournalPrepCard v-for="prep in preps" :prep="prep" type="after" />
	</div>
</template>

<style scoped>
.journal-display-container {
	margin-left: 5em;
	display: flex;
	flex-direction: column;
	position: relative;
}

.journal-display-container::before {
	content: "";
	display: block;
	border: 3px solid #D97A28;
	width: 1px;
	height: 100%;
	position: absolute;
	top: 0;
	left: -5em;
	border-radius: 3px;
}
</style>