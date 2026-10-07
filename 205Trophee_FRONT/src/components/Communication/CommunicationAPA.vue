<script setup>
</script>

<template>
	<div class="APA-container text-padding">
		<div class="title">
			<h2>Une aventure à suivre à chaque étape</h2>
			<h4>Avant, pendant et après le raid</h4>
		</div>

		<div class="APA-items-container">
			<div class="APA-item">
				<div class="img-container travaux"></div>
				<div class="text-content">
					<h4>Avant le raid</h4>
					<p>
						Suivez la remise en état de la 205 :
						sa préparation mécanique, les essais
						et l'installation des équipements
						embarqués.
					</p>
				</div>
			</div>

			<div class="APA-item">
				<div class="img-container roulant"></div>
				<div class="text-content">
					<h4>Pendant le raid</h4>
					<p>
						Vivez les étapes grâce aux caméras
						embarquées, aux directs et aux
						contenus partagés depuis le terrain.
					</p>
				</div>
			</div>

			<div class="APA-item">
				<div class="img-container twitch"></div>
				<div class="text-content">
					<h4>Après le raid</h4>
					<p>
						Retrouvez les meilleurs moments,
						les replays, le bilan de l'aventure
						et nos retours d'expérience.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.title h4 {
	color: var(--color-orange);
}

.APA-items-container {
	display: flex;
	justify-content: space-between;
	margin-top: 5em;
	position: relative;
}

.APA-items-container::before {
	content: "";
	display: block;
	border: 2px solid var(--color-orange);
	border-radius: 2px;
	position: absolute;
	width: 73%;
	height: 0px;
	top: -2em;
	left: 50%;
	transform: translateX(-50%);
}

.APA-item {
	width: 27%;
	position: relative;
	border-radius: 1em;
	border: 1px solid rgba(128, 128, 128, 0.5);
}

.APA-item .text-content {
	padding: 1em 0.5em;
}

.APA-item::before {
	content: "";
	display: block;
	border: 1px solid var(--color-orange);
	width: 1px;
	height: 2em;
	position: absolute;
	left: 50%;
	top: -2em;
	transform: translateX(-50%);
}

.APA-item::after {
	content: "";
	display: block;
	background-color: var(--color-orange);
	border: 5px solid var(--color-background);
	border-radius: 100%;
	width: 20px;
	height: 20px;
	position: absolute;
	left: 50%;
	top: -2.45em;
	transform: translateX(-50%);
}

.APA-item .img-container {
	max-height: 250px;
	height: 250px;
	max-width: 100%;
	overflow: hidden;
	border-top-left-radius: 1em;
	border-top-right-radius: 1em;

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.APA-item .img-container.travaux {
	background-image: url('@/assets/205_travaux.jpeg');
}

.APA-item .img-container.roulant {
	background-image: url('@/assets/205_roulante.jpeg');
}

.APA-item .img-container.twitch {
	background-image: url('@/assets/pc_on_twitch.jpg');
}

.APA-item img {
	max-width: 25%;
}

@media (max-width: 1024px) {
	.APA-items-container {
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}

	.APA-item {
		width: 80%;
	}

	.APA-items-container::before {
		display: none;
	}

	.APA-item::before {
		display: none;
	}

	.APA-item::after {
		display: none;
	}
}
</style>