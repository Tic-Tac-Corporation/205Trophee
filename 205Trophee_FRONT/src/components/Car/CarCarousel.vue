<script setup>
import PhotoCarrousel from '../Carrousel/PhotoCarrousel.vue';
import photoCarrouselList from '@/utils/photoCarrousel.js';

const photoModules = import.meta.glob('/src/assets/carrousel/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
});

const photos = photoCarrouselList.map((filename, index) => {
    const imagePath = Object.keys(photoModules).find(path =>
        path.endsWith(`/${filename}`)
    );

    return {
        src: imagePath ? photoModules[imagePath] : null,
        alt: `Photo ${index + 1}`,
    };
}).filter(photo => photo.src);
</script>

<template>
	<div class="main-container text-padding">
		<h2>La préparation <span class="text-orange">en images</span></h2>
		<PhotoCarrousel :images="photos" :gap="16" />
	</div>
</template>

<style scoped></style>