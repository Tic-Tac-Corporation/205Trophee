<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
		default: ""
	},
	x: {
		type: Number,
		required: true,
	},
	y: {
		type: Number,
		required: true,
	},
	selected: {
		type: Boolean,
		required: true,
	}
});

const emit = defineEmits(['click']);
</script>

<template>
	<div class="dot" :style="{ left: `${x}%`, top: `${y}%` }" @click="emit('click')">
		+
	</div>
	<div class="dot-content" v-if="selected" @click="emit('click')">
		<h4>{{ title }}</h4>
		<p>{{ description }}</p>
	</div>
</template>

<style scoped>
.dot {
	background: var(--color-orange);
	border-radius: 100%;
	width: 17px;
	height: 17px;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: bold;
	cursor: pointer;
	user-select: none;
}

.dot-content {
	position: absolute;
	width: fit-content;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid var(--color-orange);
	border-radius: 0.7em;
	background-color: rgba(255, 255, 255, 0.5);
	color: var(--color-text);
	padding: 0.7em;
	font-size: smaller;
	backdrop-filter: blur(3px);
}
</style>