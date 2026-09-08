<script setup>
import FirstPageBottom from '@/components/FirstPage/FirstPageBottom.vue';
import FirstPageMiddle1 from '@/components/FirstPage/FirstPageMiddle1.vue';
import FirstPageTop from '@/components/FirstPage/FirstPageTop.vue';
import Odometer from '@/components/FirstPage/Odometer.vue';
</script>

<template>
	<main class="MainView">
		<FirstPageTop />
		<FirstPageMiddle1 />
		<Odometer future-date="2027-05-02T14:00:00" />
		<FirstPageBottom />
	</main>
</template>
