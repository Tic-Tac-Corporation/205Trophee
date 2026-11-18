<script setup>
import { useKonamiCode } from '@/composables/useKonamiCode';

const { showEasterEgg } = useKonamiCode();
</script>

<template>
	<div>
		<!-- Ton contenu habituel -->

		<Transition name="fade">
			<div v-if="showEasterEgg" class="easter-egg" @click="showEasterEgg = false">
				<img src="@/assets/easter-egg.jpg" alt="Easter Egg" />

				<button @click.stop="showEasterEgg = false">
					Fermer ✕
				</button>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
.easter-egg {
	position: fixed;
	inset: 0;
	z-index: 9999;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}

.easter-egg img {
	max-width: 90%;
	max-height: 85vh;
	object-fit: contain;
}

.easter-egg button {
	position: absolute;
	top: 20px;
	right: 20px;
	padding: 10px 20px;
	cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>