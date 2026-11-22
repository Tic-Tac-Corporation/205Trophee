<script setup>
import IconFacebook from './SVG/IconFacebook.vue';
import IconInstagram from './SVG/IconInstagram.vue';
import IconTrello from './SVG/IconTrello.vue';
import IconTwitch from './SVG/IconTwitch.vue';
import IconYoutube from './SVG/IconYoutube.vue';

const props = defineProps({
	title: {
		type: String,
		required: true
	},
});
</script>

<template>
	<div v-if="title == 'Instagram'" :title="title">
		<a href="https://205dtf.fr/instagram">
			<IconInstagram :size="25" />
		</a>
	</div>
	<div v-else-if="title == 'Trello'" :title="title">
		<a href="https://205dtf.fr/avancement">
			<IconTrello :size="25" />
		</a>
	</div>
	<div v-else-if="title == 'Twitch'" :title="title">
		<a href="https://205dtf.fr/twitch" target="_blank">
			<IconTwitch :size="30" />
		</a>
	</div>
	<div v-else-if="title == 'Facebook'" :title="title">
		<a href="https://205dtf.fr/facebook" target="_blank">
			<IconFacebook :size="30" />
		</a>
	</div>
	<div v-else-if="title == 'Youtube'" :title="title">
		<a href="https://205dtf.fr/youtube" target="_blank">
			<IconYoutube :size="30" />
		</a>
	</div>
</template>

<style scoped>
div {
	cursor: pointer;
}
</style>
