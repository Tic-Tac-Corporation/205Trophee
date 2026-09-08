<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-digital.css';

const props = defineProps({
	initialTime: {
		type: Number,
		default: 600, // 10 minutes en secondes
	},
});

const emit = defineEmits(['countdown-finished']);

const odometerRef = ref(null);
const odometer = ref(null);
const timeLeft = ref(props.initialTime);
const interval = ref(null);

// Initialiser l'odomètre
const initOdometer = () => {
	odometer.value = new Odometer({
		el: odometerRef.value,
		value: formatTime(timeLeft.value),
		format: '(ddd).dd',
		theme: 'digital',
	});
};

// Démarrer le compte à rebours
const startCountdown = () => {
	interval.value = setInterval(() => {
		if (timeLeft.value > 0) {
			timeLeft.value--;
			odometer.value.update(formatTime(timeLeft.value));
		} else {
			clearInterval(interval.value);
			odometer.value.update('00:00');
			emit('countdown-finished');
		}
	}, 1000);
};

// Formater le temps en MMSS
const formatTime = (seconds) => {
	const mins = Math.floor(seconds / 60);
	const secs = seconds % 60;
	return `${mins.toString().padStart(2, '0')}${secs.toString().padStart(2, '0')}`;
};

// Cycle de vie
onMounted(() => {
	initOdometer();
	startCountdown();
});

onBeforeUnmount(() => {
	if (interval.value) {
		clearInterval(interval.value);
	}
});
</script>

<template>
	<div class="odometer-container">
		<div ref="odometerRef" class="odometer"></div>
	</div>
</template>

<style scoped>

</style>