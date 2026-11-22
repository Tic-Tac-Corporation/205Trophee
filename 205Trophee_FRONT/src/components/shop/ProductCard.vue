<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
	product: {
		type: Object,
		required: true
	}
});

const sizes = ref(props.product?.variants?.[0].sizes || []);
const selectedVariant = ref(props.product?.variants?.[0].color || null);
const bgStyle = computed(() => ({
	backgroundImage: `url(${new URL(`../../assets/${props.product?.images?.[0]}`, import.meta.url).href})`
}))

const selectVariant = (variant) => {
	selectedVariant.value = variant.color;
};

watch(selectedVariant, () => {
	sizes.value = props.product?.variants?.find(v => v.color === selectedVariant.value)?.sizes || [];

})
</script>

<template>
	<div class="product-card-container">
		<div class="img-container background" :style="bgStyle"></div>
		<div class="text-container">
			<div class="colors" v-if="product?.variants?.length > 0">
				<div :class="[variant.color, selectedVariant === variant.color ? 'selected' : '']"
					:style="{ backgroundColor: variant.colorCode }" v-for="variant in product.variants"
					@click="selectVariant(variant)" :key="variant.color" :title="variant.color"></div>
			</div>
			<h4>{{ product.name }}</h4>
			<div class="sexe" v-if="product?.sexe">Produit {{ product.sexe }}</div>
			<div class="size">
				<span v-for="(size, idx) in sizes">
					{{ size }}
					<span v-if="idx !== sizes.length - 1"> - </span>
				</span>
			</div>
			<div class="price">{{ product.price }}€</div>
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
	cursor: pointer;
	transition: all 0.1s ease-in-out;
}

.colors div.selected {
	border: 1px solid var(--color-orange);
}

.sexe {
	font-size: 0.6em;
}

.size,
.price {
	font-size: 0.8em;
}

div.background {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 0.7em;
	overflow: hidden;
}
</style>