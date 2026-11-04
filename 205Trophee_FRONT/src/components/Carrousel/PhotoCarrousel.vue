<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
	images: {
		type: Array,
		required: true,
	},
	gap: {
		type: Number,
		default: 16,
	},
});

const carouselContainer = ref(null);
const containerWidth = ref(0);
const currentIndex = ref(0);

let resizeObserver = null;

// Nombre d'images visibles selon la largeur
const itemsPerPage = computed(() => {
	if (containerWidth.value < 480) return 1;
	if (containerWidth.value < 768) return 2;
	if (containerWidth.value < 1024) return 3;
	return 4;
});

// Nombre maximum de déplacements
const maxIndex = computed(() => {
	return Math.max(0, props.images.length - itemsPerPage.value);
});

// État des boutons
const canGoPrevious = computed(() => currentIndex.value > 0);
const canGoNext = computed(() => currentIndex.value < maxIndex.value);

// Largeur d'une image, exprimée en pourcentage
const itemWidth = computed(() => {
	return (containerWidth.value - props.gap * (itemsPerPage.value - 1))
		/ itemsPerPage.value;
});

// Déplacement du carrousel
const trackStyle = computed(() => ({
	gap: `${props.gap}px`,
	transform: `translateX(-${currentIndex.value * (itemWidth.value + props.gap)}px)`,
}));

// Navigation
function previous() {
	currentIndex.value = Math.max(0, currentIndex.value - 1);
}

function next() {
	currentIndex.value = Math.min(maxIndex.value, currentIndex.value + 1);
}

// Réinitialisation si le nombre de photos ou la largeur change
watch([itemsPerPage, () => props.images.length], () => {
	currentIndex.value = Math.min(currentIndex.value, maxIndex.value);
});

// Observation de la taille du conteneur
onMounted(() => {
	resizeObserver = new ResizeObserver(entries => {
		containerWidth.value = entries[0].contentRect.width;
	});

	if (carouselContainer.value) {
		resizeObserver.observe(carouselContainer.value);
	}
});

onUnmounted(() => {
	resizeObserver?.disconnect();
});
</script>

<template>
	<div class="photo-carousel">

		<!-- Bouton précédent -->
		<button class="carousel-button" :disabled="!canGoPrevious" @click="previous" aria-label="Photos précédentes">
			&#10094;
		</button>

		<!-- Conteneur -->
		<div ref="carouselContainer" class="carousel-container">
			<div class="carousel-track" :style="trackStyle">
				<div v-for="(image, index) in images" :key="image.src || index" class="carousel-item" :style="{
					width: `${itemWidth}px`,
					flexBasis: `${itemWidth}px`
				}">
					<img :src="image.src" :alt="image.alt || `Image ${index + 1}`" loading="lazy" />
				</div>
			</div>
		</div>

		<!-- Bouton suivant -->
		<button class="carousel-button" :disabled="!canGoNext" @click="next" aria-label="Photos suivantes">
			&#10095;
		</button>

	</div>
</template>

<style scoped>
.photo-carousel {
	display: flex;
	align-items: center;
	gap: 12px;
	width: 100%;
}

.carousel-container {
	flex: 1;
	min-width: 0;
	overflow: hidden;
}

.carousel-track {
	display: flex;
	transition: transform 0.35s ease;
}

.carousel-item {
	flex-shrink: 0;
	min-width: 0;
	overflow: hidden;
	border-radius: 8px;
}

.carousel-item img {
	display: block;
	width: 100%;
	aspect-ratio: 4 / 3;
	object-fit: cover;
}

.carousel-button {
	flex-shrink: 0;
	width: 36px;
	height: 36px;
	border: none;
	border-radius: 50%;
	background: #333;
	color: white;
	cursor: pointer;
	transition: opacity 0.2s;
}

.carousel-button:disabled {
	opacity: 0.3;
	cursor: not-allowed;
}

@media (max-width: 480px) {
	.photo-carousel {
		gap: 6px;
	}

	.carousel-button {
		width: 28px;
		height: 28px;
	}
}
</style>
