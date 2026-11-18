<script setup>
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
import KonamiCode from './components/KonamiCode.vue';
</script>

<template>
	<KonamiCode />
	<Menu />
	<RouterView />
	<Footer />
</template>

<style scoped>

</style>
