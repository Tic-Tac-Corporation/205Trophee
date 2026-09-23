<script setup>
import CarHeader from '@/components/Car/CarHeader.vue';
import CarInfos from '@/components/Car/CarInfos.vue';
import CarJournal from '@/components/Car/CarJournal.vue';
import CarPreparation from '@/components/Car/CarPreparation.vue';
import ProjetPlanning from '@/components/Projet/ProjetPlanning.vue';

</script>

<template>
	<main class="MainView">
		<CarHeader />
		<CarInfos />
		<CarPreparation />
		<ProjetPlanning />
		<CarJournal />
	</main>
</template>
