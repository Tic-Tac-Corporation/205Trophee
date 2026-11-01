<script setup>
import CarHeader from '@/components/Car/CarHeader.vue';
import CarInfos from '@/components/Car/CarInfos.vue';
import CarJournal from '@/components/Car/CarJournal.vue';
import CarPreparation from '@/components/Car/CarPreparation.vue';
import TrelloBoard from '@/components/trello/TrelloBoard.vue';
</script>

<template>
	<main class="MainView">
		<CarHeader />
		<CarInfos />

		<TrelloBoard board-id="69f706fa1f2e22c6a481f85f" />
	</main>
</template>
