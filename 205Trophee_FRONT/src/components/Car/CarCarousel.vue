<script setup>
import PhotoCarrousel from '../Carrousel/PhotoCarrousel.vue';

const photoModules = import.meta.glob('@/assets/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
});

const photos = [
    '205.jpg',
    '205_travaux.jpeg',
    '205_table_orientation.jpg',
    '205_profil.png',
    '205_objectif.webp',
    '205_avant_travaux.jpg',
].map((filename, index) => ({
    src: photoModules[`/src/assets/${filename}`],
    alt: `Photo ${index + 1}`,
}));
</script>

<template>
	<div class="main-container text-padding">
		<h2>La préparation <span class="text-orange">en images</span></h2>
		<PhotoCarrousel :images="photos" :gap="16" />
	</div>
</template>

<style scoped></style>