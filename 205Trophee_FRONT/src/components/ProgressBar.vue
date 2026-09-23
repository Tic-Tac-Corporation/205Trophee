<script setup>
const props = defineProps({
	width: {
		type: Number,
		required: false,
		default: 100
	},
	progress: {
		type: Number,
		required: true,
	}
});
</script>

<template>
	<div class="progress-bar-container" :style="{ width: props.width + '%' }">
		<div class="progress" :style="{ width: props.progress + '%' }"></div>
	</div>
</template>

<style scoped>
.progress-bar-container {
	height: 10px;
	border-radius: 5px;
	background-color: #A79C90;
	margin-top: 7px;
}

.progress-bar-container .progress {
	height: 100%;
	border-radius: 5px;
	background-color: #D97A28;
	border: 1px solid rgba(173, 93, 93, 0.5)
}
</style>