<script setup>
import ContactFrame from '@/components/Contact/ContactFrame.vue';
import SponsorForm from '@/components/Contact/SponsorForm.vue';
import SponsorPlans from '@/components/Sponsors/SponsorPlans.vue';
import SponsorsAccompagnement from '@/components/Sponsors/SponsorsAccompagnement.vue';
import SponsorsHeader from '@/components/Sponsors/SponsorsHeader.vue';
import SponsorsList from '@/components/Sponsors/SponsorsList.vue';
import SponsorsWhy from '@/components/Sponsors/SponsorsWhy.vue';

</script>

<template>
	<main class="MainView">
		<SponsorsHeader />
		<SponsorsList />
		<SponsorsAccompagnement />
		<SponsorsWhy />
		<SponsorPlans />
		<br>
		<ContactFrame title="Devenir sponsor" id="form">
			<SponsorForm />
		</ContactFrame>
		<br>
	</main>
</template>

<style scoped></style>