<script setup>
import IconInstagram from './SVG/IconInstagram.vue';
import IconTrello from './SVG/IconTrello.vue';
import IconTwitch from './SVG/IconTwitch.vue';

const props = defineProps({
	title: {
		type: String,
		required: true
	},
});
</script>

<template>
	<div v-if="title == 'Instagram'" :title="title">
		<IconInstagram :size="25" />
	</div>
	<div v-else-if="title == 'Trello'" :title="title">
		<IconTrello :size="25" />
	</div>
	<div v-else-if="title == 'Twitch'" :title="title">
		<IconTwitch :size="30" />
	</div>
</template>

<style scoped>
div {
	cursor: pointer;
}
</style>
