<script setup>
const props = defineProps({
	size: {
		type: Number,
		required: false,
		default: 30
	},
	fill: {
		type: String,
		required: false,
		default: '#000000'
	},
});
</script>

<template>
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Icons"
		viewBox="0 0 32 32" :width="size" :height="size" xml:space="preserve">
		<path
			d="M29,9h-7c-1.7,0-3,1.3-3,3v15c0,1.7,1.3,3,3,3h7c1.7,0,3-1.3,3-3V12C32,10.3,30.7,9,29,9z M27,27h-3c-0.6,0-1-0.4-1-1  s0.4-1,1-1h3c0.6,0,1,0.4,1,1S27.6,27,27,27z M30,22h-9V12c0-0.6,0.4-1,1-1h7c0.6,0,1,0.4,1,1V22z" :fill="fill" />
		<path
			d="M17,27v-5H2V5c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v2h2V5c0-1.7-1.3-3-3-3H3C1.3,2,0,3.3,0,5v22c0,1.7,1.3,3,3,3h15  C17.4,29.2,17,28.1,17,27z M13,27h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S13.6,27,13,27z" :fill="fill" />
	</svg>
</template>