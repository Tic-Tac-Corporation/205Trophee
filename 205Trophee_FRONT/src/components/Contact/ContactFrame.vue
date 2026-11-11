<script setup>
import { ref } from 'vue';

const props = defineProps({
	title: {
		type: String,
		required: true
	}
});

const name = ref("");
</script>

<template>
	<div class="contact-frame-main-container">
		<div class="contact-frame-container">
			<h2>{{ title }}</h2>
			<br>
			<slot />
		</div>
	</div>
</template>

<style scoped>
.contact-frame-main-container {
	display: flex;
	justify-content: center;
}

.contact-frame-container {
	border: 1px solid var(--color-border);
	border-radius: 0.7em;
	box-shadow: 0px 0px 32px 1px rgba(0, 0, 0, 0.2);
	-webkit-box-shadow: 0px 0px 32px 1px rgba(0, 0, 0, 0.2);
	padding: 1em;
	background-color: var(--color-background);
	width: 50vw;
	max-width: 90vw;
}

@media (max-width: 1024px) {
	.contact-frame-container {
		width: 90vw;
	}
}
</style>