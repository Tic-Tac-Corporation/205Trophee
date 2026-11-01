<script setup>
</script>

<template>
	<header>
		<div class="header-background">
			<div class="header-title">
				<div class="russo-one">
					<span>•</span> une <span>205</span>
					<br>
					• <span>deux</span> amis
					<br>
					<span>•</span> une <span>aventure</span>
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

	background-image: url('@/assets/header_une_205_2_amis.jpg');
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
	line-height: 1.2em;
}

header .header-title span {
	color: var(--color-orange);
}

@media (max-width: 1024px) {
	header .header-title {
		margin-left: 1em;
		font-size: 3em;
	}
}
</style>