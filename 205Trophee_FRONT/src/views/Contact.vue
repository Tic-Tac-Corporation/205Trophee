<script setup>
import ContactForm from '@/components/Contact/ContactForm.vue';
import ContactFrame from '@/components/Contact/ContactFrame.vue';
</script>

<template>
	<main class="MainView">
		<div class="art-padding"></div>
		<ContactFrame title="Nous Contacter">
			<ContactForm />
		</ContactFrame>
	</main>
</template>

<style scoped>
.art-padding {
	padding-top: 10em;
}
</style>