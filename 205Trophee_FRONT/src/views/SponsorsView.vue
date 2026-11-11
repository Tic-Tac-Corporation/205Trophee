<script setup>
import ContactFrame from '@/components/Contact/ContactFrame.vue';
import SponsorForm from '@/components/Contact/SponsorForm.vue';
import SponsorPlans from '@/components/Sponsors/SponsorPlans.vue';
import SponsorsAccompagnement from '@/components/Sponsors/SponsorsAccompagnement.vue';
import SponsorsFinancement from '@/components/Sponsors/SponsorsFinancement.vue';
import SponsorsHeader from '@/components/Sponsors/SponsorsHeader.vue';
import SponsorsList from '@/components/Sponsors/SponsorsList.vue';
import SponsorsMarquePlacement from '@/components/Sponsors/SponsorsMarquePlacement.vue';
import SponsorsOtherPlans from '@/components/Sponsors/SponsorsOtherPlans.vue';
import SponsorsSoutien from '@/components/Sponsors/SponsorsSoutien.vue';
import SponsorsWhy from '@/components/Sponsors/SponsorsWhy.vue';

</script>

<template>
	<main class="MainView">
		<SponsorsHeader />
		<SponsorsList />
		<SponsorsAccompagnement />
		<SponsorsSoutien />
		<SponsorsFinancement />
		<SponsorsMarquePlacement />
		<SponsorsWhy />
		<SponsorPlans />
		<SponsorsOtherPlans />
		<ContactFrame title="Devenir sponsor" id="form">
			<SponsorForm />
		</ContactFrame>
		<br>
	</main>
</template>

<style scoped></style>