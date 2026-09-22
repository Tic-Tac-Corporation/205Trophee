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
	<svg xmlns="http://www.w3.org/2000/svg" :fill="fill" :width="size" :height="size" viewBox="0 0 24 24"
		id="car-door-left-1" data-name="Layer 1" class="icon line">
		<path id="primary"
			d="M12.29,3.29,20,11v4.13a1,1,0,0,1-.86,1l-2.06.3A6.11,6.11,0,0,0,12,21H5a1,1,0,0,1-1-1V4A1,1,0,0,1,5,3h6.59A1,1,0,0,1,12.29,3.29ZM20,11H4m4,4h2"
			style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;" :stroke="fill" />
	</svg>
</template>