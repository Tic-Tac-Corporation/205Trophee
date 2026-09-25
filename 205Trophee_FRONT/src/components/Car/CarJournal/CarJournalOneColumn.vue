<script setup>
import { toRefs } from 'vue';

const props = defineProps({
	preps: {
		type: Array,
		required: true,
	},
});

const preps = toRefs(props.preps);
</script>

<template>
	<div class="journal-display-container">
		TEST
	</div>
</template>

<style scoped>
.journal-display-container {
	background-color: rgba(0, 255, 34, 0.1);
}
</style>