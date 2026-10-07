<script setup>
import CommunicationAPA from '@/components/Communication/CommunicationAPA.vue';
import CommunicationDispo from '@/components/Communication/CommunicationDispo.vue';
import CommunicationHeader from '@/components/Communication/CommunicationHeader.vue';
</script>

<template>
	<main class="MainView">
		<CommunicationHeader />
		<CommunicationAPA />
		<CommunicationDispo />
	</main>
</template>
