<script setup>
import PresentationRally from '../Pilotes/PresentationRally.vue';
</script>

<template>
	<div class="container">
		<div class="video-container">
			<video src="@/assets/Video/intro_light.mp4" autoplay muted loop></video>
		</div>

		<div class="logo-container">
			<img src="@/assets/logo2.png" class="team-logo" alt="LOGO">
		</div>

		<div class="team-presentation-container">
			<PresentationRally firstname="Quentin" lastname="Gontier" link="QG" />
			<PresentationRally firstname="Killian" lastname="Bernard" link="BK" />
		</div>
	</div>
</template>

<style scoped>
.container {
	height: 100vh;
	position: relative;
}

.video-container {
	width: 99vw;
	height: 100vh;
	overflow: hidden;
}

video {
	object-fit: cover;
	width: 100%;
}

.logo-container {
	width: 80%;
	max-width: 1000px;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	flex-direction: column;
}

img.team-logo {
	max-width: 1000px;
}

.team-presentation-container {
	position: absolute;
	bottom: 0px;
	left: 0;
	padding: 2em 4em;
	max-width: min(600px, 100vw);
	width: fit-content;
	display: flex;
	flex-wrap: wrap;
	gap: 1.5em 6em;
	background-color: white;
	border-top-right-radius: 5em;
	height: fit-content;
}

@media (max-width: 1024px) {
	.team-presentation-container {
		top: 100%;
		width: 100%;
		max-width: 100vw;
		border-radius: 0;
		justify-content: center;
	}
}

.odometer {
	position: absolute;
	top: 70%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
