<script setup>
import CarCarousel from '@/components/Car/CarCarousel.vue';
import CarHeader from '@/components/Car/CarHeader.vue';
import CarInfos from '@/components/Car/CarInfos.vue';
import CarTrelloIntroduction from '@/components/Car/CarTrelloIntroduction.vue';
import TrelloBoard from '@/components/trello/TrelloBoard.vue';
</script>

<template>
	<main class="MainView">
		<CarHeader />
		<CarInfos />
		<CarCarousel />
		<CarTrelloIntroduction />
		<TrelloBoard board-id="69f706fa1f2e22c6a481f85f" />
	</main>
</template>
