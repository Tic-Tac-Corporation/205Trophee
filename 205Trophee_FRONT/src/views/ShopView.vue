<script setup>
import ProductCard from '@/components/shop/ProductCard.vue';

</script>

<template>
	<main class="MainView">
		<div class="logo-container">
			<img src="@/assets/logo.png" alt="">
		</div>

		<div class="shop-container text-padding">
			<template v-for="n in 10">
				<ProductCard />
			</template>
		</div>
	</main>
</template>

<style scoped>
.logo-container {
	display: flex;
	justify-content: center;
	padding-top: 7em;
}

.logo-container img {
	height: 30vh;
}

.shop-container {
	min-height: 70vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2em;
}
</style>