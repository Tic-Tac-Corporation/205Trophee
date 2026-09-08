<script setup>
</script>

<template>
	<header>
		<div class="header-background">
			<div class="header-title">
				une <span>205</span>
				<br>
				<span>deux</span> ami<span>.</span>
				<br>
				une <span>aventure</span>
				<div class="header-subtitle">
					Des Terres Froides de l'Isère aux pistes marocaines, <br>
					nous préparons un Peugeot 205 familliale pour relever <br>
					un défi humain, mécanique et technologique.
				</div>
			</div>

		</div>
	</header>
</template>

<style scoped>
header {
	overflow: hidden;
	max-height: 700px;
}

header .header-background {

	background-image: url('@/assets/projet_header.webp');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 700px;

	display: flex;
	justify-content: flex-start;
	align-items: center;
}

header .header-title {
	text-transform: uppercase;
	font-size: 5em;
	font-weight: bold;
	color: white;
	margin-left: 2em;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

header .header-title .header-subtitle {
	font-size: medium;
	font-weight: normal;
	text-shadow: none;
}

header .header-title span {
	color: #D97A28;
}

@media (max-width: 1024px) {
	header .header-title {
		margin-left: 1em;
		font-size: 3em;
	}
}
</style>