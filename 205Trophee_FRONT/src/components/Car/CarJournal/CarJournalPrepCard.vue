<script setup>
const props = defineProps({
	prep: {
		type: Object,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div :class="['prep-card', type]">
		<div class="header">
			<div>{{ prep.date }}</div>
			<div>{{ prep.step.title }}</div>
		</div>
		<div class="content">
			<h4 class="title">{{ prep.title }}</h4>
			<div class="photo-container"></div>
			<div class="photo-number-container"></div>
		</div>
	</div>
</template>

<style scoped>
.prep-card {
	border: 1px solid #A79C90;
	border-radius: 1em;
	width: 100%;
	padding: 0.5em 0.7em;
	position: relative;
	margin-bottom: 1em;
}

.prep-card.before::after,
.prep-card.after::before {
	content: "";
	display: block;
	position: absolute;
	height: 1px;
	width: 5em;
	border: 1px solid #A79C90;
	border-style: dashed;
}

.prep-card.before::after {
	top: 50%;
	left: 100%;
	transform: translateY(-50%);
}

.prep-card.after::before {
	top: 50%;
	right: 100%;
	transform: translateY(-50%);
}

.prep-card .header {
	display: flex;
	gap: 0.5em 3em;
}

@media (max-width: 500px) {
	.prep-card .header  {
		flex-wrap: wrap;
	}
}
</style>