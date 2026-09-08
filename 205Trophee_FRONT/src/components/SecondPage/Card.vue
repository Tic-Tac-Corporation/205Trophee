<script setup>
import { computed } from 'vue'

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	backgroundUrl: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});


const bgStyle = computed(() => ({
	backgroundImage: `url(${new URL(`../../assets/${props.backgroundUrl}`, import.meta.url).href})`
}))
</script>

<template>
	<RouterLink class="card-container no-link" :to="link">
		<div class="background" :style="bgStyle">
			<div class="title">
				<span>{{ title }}</span>
			</div>
		</div>
		<div class="link">{{ title }}</div>
	</RouterLink>
</template>

<style scoped>
.card-container {
	min-width: 300px;
	width: 30%;
	max-height: 70vh;
	height: 70vh;
	cursor: pointer;
}

@media (max-width: 1024px) {
	.card-container {
		max-width: 70vw;
		width: 100%;
		max-height: 70vh;
		height: 70vh;
	}
}

div.background {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: calc(70vh - 4em);
	border-radius: 0.7em;
	overflow: hidden;
}

div.title {
	transition: all 0.2s ease-in-out;
	opacity: 0;
	font-size: 50px;
	color: white;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(4px);
	user-select: none;
}

div.title span {
	text-align: center;
}

div.link {
	font-size: x-large;
}

.card-container:hover div.title {
	opacity: 1;
}

.link {
	padding: 0.3em 0.5em;
	color: var(--color-boue);
}
</style>
