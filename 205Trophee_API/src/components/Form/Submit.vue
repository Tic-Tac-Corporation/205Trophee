<script setup lang="ts">
import { ref, toRef, watch } from 'vue';
import ChecIcon from '../Icons/ChecIcon.vue';

const props = defineProps({
	label: {
		type: String,
		required: true,
	}
});

const isSubmited = ref(false);
const submitAction = () => {
	isSubmited.value = true;
}
</script>

<template>
	<div class="wrapper">
		<button :class="{ is_active: isSubmited }" @click="submitAction">
			<span v-if="!isSubmited">{{ label }}</span>
			<Transition name="appear">
				<span v-if="isSubmited">
					<ChecIcon />
				</span>
			</Transition>
		</button>
	</div>
</template>

<style scoped>
.wrapper {
	position: relative;
	width: 150px;
	height: 100%;
	display: flex;
	justify-content: center;
}

button {
	width: 150px;
	height: 30px;
	line-height: 1;
	font-size: 15px;
	font-weight: bold;
	letter-spacing: 1px;
	border: 2px solid #5D8FA8;
	background: #fff;
	color: #5D8FA8;
	border-radius: 40px;
	cursor: pointer;
	overflow: hidden;
	transition: all .35s;
}

button:hover {
	background: #5D8FA8;
	color: #fff;
}

button span {
	opacity: 1;
	visibility: visible;
	transition: all .35s;
}

.success {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	border-radius: 50%;
	z-index: 1;
	opacity: 0;
	visibility: hidden;
	transition: all .35s;
}

button.is_active {
	width: 30px;
	height: 30px;
	background: transparent;
}

.appear-enter-active {
	animation: appear 0.5s;
}

@keyframes appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
</style>