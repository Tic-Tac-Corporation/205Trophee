<script setup>
import SponsorPlans from '@/components/Sponsors/SponsorPlans.vue';
import SponsorsAccompagnement from '@/components/Sponsors/SponsorsAccompagnement.vue';
import SponsorsFinancement from '@/components/Sponsors/SponsorsFinancement.vue';
import SponsorsHeader from '@/components/Sponsors/SponsorsHeader.vue';
import SponsorsList from '@/components/Sponsors/SponsorsList.vue';
import SponsorsMarquePlacement from '@/components/Sponsors/SponsorsMarquePlacement.vue';
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
	</main>
</template>

<style scoped>
</style>