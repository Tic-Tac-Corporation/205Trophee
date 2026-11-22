<script setup>
import FirstPageMiddle1 from '@/components/FirstPage/FirstPageMiddle1.vue';
import FirstPageTop from '@/components/FirstPage/FirstPageTop.vue';
import Odometer from '@/components/FirstPage/Odometer.vue';
</script>

<template>
	<main class="MainView">
		<FirstPageTop />
		<Odometer future-date="2027-05-02T14:00:00" />
		<FirstPageMiddle1 />
	</main>
</template>
