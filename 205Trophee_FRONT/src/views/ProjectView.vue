<script setup>
import ProjetCompetences from '@/components/Projet/ProjetCompetences.vue';
import ProjetHeader from '@/components/Projet/ProjetHeader.vue';
import ProjetInfos from '@/components/Projet/ProjetInfos.vue';
import ProjetObjectif from '@/components/Projet/ProjetObjectif.vue';
import ProjetPlanning from '@/components/Projet/ProjetPlanning.vue';
import ProjetTransmission from '@/components/Projet/ProjetTransmission.vue';
</script>

<template>
	<main class="MainView">
		<ProjetHeader />
		<ProjetInfos />
		<ProjetObjectif />
		<ProjetTransmission />
		<ProjetCompetences />
		<ProjetPlanning />
	</main>
</template>

<style scoped>
</style>