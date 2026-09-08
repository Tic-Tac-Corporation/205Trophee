<template>
	<div class="logo-container">
		<img src="@/assets/logo.png" alt="LOGO">
	</div>
</template>

<style scoped>
.logo-container {
	position: relative;
	width: 150px;
	height: 30px;
}

img {
	height: 100px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>