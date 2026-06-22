<script setup lang="ts">
import { toRef, watch } from 'vue';

const props = defineProps({
	type: {
		type: String,
		required: false,
		default: 'text'
	},
	label: {
		type: String,
		required: true,
	},
	modelValue: {
		required: false,
	},
});
const emit = defineEmits(["update:modelValue"]);

const inputValue = toRef(props, 'modelValue');

const updateValue = ({ target }: Event) => {
	emit('update:modelValue', (target as HTMLInputElement).value)
}
</script>

<template>
	<div class="group">
		<input :type="type" :value="modelValue" @input="updateValue" :class="inputValue ? 'active' : ''" />
		<span class="highlight"></span>
		<span class="bar"></span>
		<label>{{ label }}</label>
	</div>
</template>

<style scoped>
/* form starting stylings ------------------------------- */
.group {
	position: relative;
	margin-top: 30px;
}

input {
	padding: 10px 10px 10px 5px;
	display: block;
	width: 300px;
	border: none;
	border-bottom: 1px solid #141414;
}

input:focus {
	outline: none;
}

/* LABEL ======================================= */
label {
	color: #999;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 0.2s ease all;
	-moz-transition: 0.2s ease all;
	-webkit-transition: 0.2s ease all;
}

/* active state */
input:focus~label,
input.active~label {
	top: -20px;
	color: #5D8FA8;
}

/* BOTTOM BARS ================================= */
.bar {
	position: relative;
	display: block;
	width: 315px;
}

.bar:before,
.bar:after {
	content: '';
	height: 1px;
	width: 0;
	bottom: 1px;
	position: absolute;
	background: #5D8FA8;
	transition: 0.2s ease all;
	-moz-transition: 0.2s ease all;
	-webkit-transition: 0.2s ease all;
}

.bar:before {
	left: 50%;
}

.bar:after {
	right: 50%;
}

/* active state */
input:focus~.bar:before,
input:focus~.bar:after {
	width: 50%;
}
</style>