<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const menuIsTriggered = ref(false)

const triggerMenu = () => {
	menuIsTriggered.value = !menuIsTriggered.value
}

const menuItems = [
	{ label: 'Accueil', to: '/' },
	{ label: 'Le Projet', to: '/projet' },
	{ label: 'Sponsors et boutique', to: '/sponsors' },
	{ label: 'Nos contributeurs', to: '/contributeurs' },
]
</script>

<template>
	<header>
		<div class="menu-wrapper" :class="{ active: menuIsTriggered }">
			<img class="menu-logo" src="@/assets/logo_menu.png" alt="Logo 205 Trophée" />
			<div
				class="burger-icon"
				:class="{ active: menuIsTriggered }"
				@click="triggerMenu"
				aria-label="Menu"
				role="button"
				tabindex="0"
				@keydown.enter="triggerMenu"
				@keydown.space.prevent="triggerMenu"
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="menu-content">
				<RouterLink
					v-for="item in menuItems"
					:key="item.to"
					:to="item.to"
					@click="menuIsTriggered = false"
				>
					{{ item.label }}
				</RouterLink>
			</div>
		</div>
	</header>
</template>

<style scoped>
.menu-logo {
	height: 4.5em;
}
header {
	display: flex;
	justify-content: center;
	padding: 1.7em 1.3em;
	gap: 1.3em;
	position: absolute;
	width: calc(100vw - 10em);
}

header a,
header .burger-icon span,
header .menu-content {
	transition: all 0.2s ease-in-out;
}

header * {
	user-select: none;
}

header a {
	font-size: large;
	color: #141414;
	position: relative;
	text-decoration: none;
}

header a::after {
	content: '';
	position: absolute;
	bottom: -4px;
	left: 0;
	width: 0;
	height: 2px;
	background-color: #D97A28;
	transition: width 0.3s ease-in-out;
}

header a:hover::after {
	width: 100%;
}

header .router-link-exact-active {
	color: #D97A28;
}

header .router-link-exact-active::after {
	width: 100%;
}

header .menu-wrapper {
	border-radius: 1.2em;
}

header .menu-content {
	display: flex;
	justify-content: flex-end;
	gap: 1.7em;
}

.burger-icon {
	display: none;
	flex-direction: column;
	justify-content: space-between;
	width: 28px;
	height: 20px;
	cursor: pointer;
	position: relative;
	z-index: 10;
}

.burger-icon span {
	display: block;
	width: 100%;
	height: 3px;
	background-color: #141414;
	border-radius: 2px;
	transition: all 0.3s ease-in-out;
	transform-origin: center;
}

.burger-icon.active span:nth-child(1) {
	transform: translateY(8.5px) rotate(-45deg);
}

.burger-icon.active span:nth-child(2) {
	opacity: 0;
	transform: scaleX(0);
}

.burger-icon.active span:nth-child(3) {
	transform: translateY(-8.5px) rotate(45deg);
}

@media (min-width: 1024px) {
	header {
		margin: 0 5em 0 5em;
		position: relative;
	}

	header .menu-wrapper {
		display: flex;
		align-items: center;
		width: 100%;
	}

	header .menu-content {
		display: flex;
		justify-content: flex-end;
		gap: 2.5em;
		flex: 1;
	}

	header a {
		font-size: large;
		color: #141414;
	}

	header .menu-logo {
		position: absolute;
		left: 0%;
		top: 50%;
		transform: translateY(-50%);
	}
}

@media (max-width: 1024px) {
	header {
		padding: 0;
		width: calc(100vw - 1.7em);
	}

	header .menu-wrapper {
		margin: 1.7em;
		padding: 1.7em;
		width: 100%;

		background-color: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(10px);

		display: flex;
		align-items: flex-end;
		gap: 2.3em;
		flex-wrap: wrap;
	}

	header .menu-wrapper.active {
		background-color: #141414;
	}

	header .menu-wrapper.active a {
		color: #FFFFFF;
	}

	header .menu-wrapper.active a:hover,
	header .menu-wrapper.active .router-link-exact-active {
		color: #D97A28;
	}

	header .menu-wrapper.active .burger-icon span {
		background-color: #FFFFFF;
	}

	header .menu-logo {
		display: block;
		margin-right: auto;
	}

	.burger-icon {
		display: flex;
	}

	header .menu-wrapper .menu-content {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
		flex: 0 0 100%;
	}

	header .menu-wrapper.active .menu-content {
		max-height: 500px;
		opacity: 1;
		flex-direction: column;
		align-items: flex-end;
		gap: 2.3em;
		padding-top: 1em;
	}

	header .menu-logo,
	.burger-icon {
		flex: 0 0 auto;
	}

	header .menu-content {
		flex: 0 0 100%;
	}
}
</style>