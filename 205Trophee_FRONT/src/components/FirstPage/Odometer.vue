<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
	// Date future au format ISO (ex: '2027-01-01T00:00:00')
	futureDate: {
		type: String,
		required: true,
	},
});

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const interval = ref(null);

// Calculer le temps restant
const updateCountdown = () => {
	const future = new Date(props.futureDate);
	const now = new Date();
	const diff = future - now;

	if (diff <= 0) {
		// Compte à rebours terminé
		days.value = 0;
		hours.value = 0;
		minutes.value = 0;
		clearInterval(interval.value);
		return;
	}

	// Calcul des unités
	days.value = Math.floor(diff / (1000 * 60 * 60 * 24)) - 1;
	hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
};

// Mettre à jour toutes les minutes (ou secondes si tu veux plus de précision)
onMounted(() => {
	updateCountdown();
	interval.value = setInterval(updateCountdown, 60000); // 1 minute
});

onBeforeUnmount(() => {
	if (interval.value) {
		clearInterval(interval.value);
	}
});
</script>

<template>
	<div class="countdown-container">
		<div>
			<div class="countdown-digit">
				<span class="digit-value">Départ dans :</span>
			</div>
		</div>
		<div>
			<div class="countdown-digit">
				<span class="digit-value">{{ days }}</span>
				<span class="digit-label">Jours</span>
			</div>
			<div class="countdown-digit">
				<span class="digit-value">{{ hours }}</span>
				<span class="digit-label">Heures</span>
			</div>
			<div class="countdown-digit">
				<span class="digit-value">{{ minutes }}</span>
				<span class="digit-label">Minutes</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.countdown-container {
	padding: 0.3em;
	background: #141414;
	width: 100%;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	color: white;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	align-items: center;

}

.countdown-container > div:last-child {
	display: flex;
}

.countdown-digit {
	display: flex;
	align-items: center;
	padding: 10px 15px;
	align-items: flex-end;
	flex-wrap: wrap;
}

.digit-value {
	font-size: 190%;
	font-weight: bold;
	margin-right: 2px;
}

.digit-label {
	font-size: 80%;
	color: #aaa;
	text-transform: uppercase;
	position: relative;
	bottom: 10px;
}
</style>