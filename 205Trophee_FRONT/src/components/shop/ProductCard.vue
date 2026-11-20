<script setup>
</script>

<template>
	<div class="product-card-container">
		<div class="img-container">

		</div>
		<div class="text-container">
			<div class="colors">
				<div class="blanc"></div>
				<div class="noir"></div>
				<div class="bleu"></div>
			</div>
			<h4>T-shirt Officiel 205 DTF</h4>
			<div class="size">S - M - L - XL</div>
			<div class="price">99.99€</div>
		</div>
	</div>
</template>

<style scoped>
.product-card-container {
	border-radius: 0.7em;

	height: fit-content;
	width: 300px;
}

.img-container {
	background-color: var(--color-border);
	border-radius: 0.7em;
	height: 300px;
	width: 300px;
}

.text-container {
	padding: 0.7em;
}

.colors {
	display: flex;
	gap: 0.7em;
}

.colors div {
	border: 1px solid var(--color-border);
	height: 16px;
	width: 16px;
	border-radius: 100%;
	margin-bottom: 0.5em;
}

.noir {
	background-color: black;
}

.bleu {
	background-color: rgb(0, 162, 255);
}
</style>