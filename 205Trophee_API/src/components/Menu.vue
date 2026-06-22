<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()

const menuIsTriggered = ref(false)

const triggerMenu = () => {
	menuIsTriggered.value = !menuIsTriggered.value
}

const closeMenuAndNavigate = (to: string) => {
	menuIsTriggered.value = false
	router.push(to)
}

const isActive = (itemTo: string) => {
	return route.path === itemTo
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
				<div
					v-for="item in menuItems"
					:key="item.to"
					class="menu-link"
					:class="{ 'router-link-exact-active': isActive(item.to) }"
					@click="closeMenuAndNavigate(item.to)"
					@keydown.enter="closeMenuAndNavigate(item.to)"
					role="link"
					tabindex="0"
				>
					{{ item.label }}
				</div>
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
	position: sticky;
	top: 0.5em;
	z-index: 100;
	width: calc(100vw - 10em);
}

header a,
header .menu-link,
header .burger-icon span,
header .menu-content {
	transition: all 0.2s ease-in-out;
}

header * {
	user-select: none;
}

header a,
header .menu-link {
	font-size: large;
	color: var(--color-dark);
	position: relative;
	text-decoration: none;
	cursor: pointer;
}

header a::after,
header .menu-link::after {
	content: '';
	position: absolute;
	bottom: -4px;
	left: 0;
	width: 0;
	height: 2px;
	background-color: var(--color-primary);
	transition: width 0.3s ease-in-out;
}

header a:hover::after,
header .menu-link:hover::after {
	width: 100%;
}

header .router-link-exact-active,
header .menu-link.router-link-exact-active {
	color: var(--color-primary);
}

header .router-link-exact-active::after,
header .menu-link.router-link-exact-active::after {
	width: 100%;
}

header .menu-wrapper {
	border-radius: 1.2em;
	transition: background-color 0.4s ease-in-out;
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
	background-color: var(--color-dark);
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
	}

	header .menu-wrapper {
		display: flex;
		align-items: center;
		width: 100%;
		background-color: var(--color-white-transparent);
		backdrop-filter: blur(10px);
		padding: 0.5em 1.5em;
	}

	header .menu-content {
		display: flex;
		justify-content: flex-end;
		gap: 2.5em;
		flex: 1;
	}

	header a,
	header .menu-link {
		font-size: large;
		color: var(--color-dark);
	}

	header .menu-logo {
		height: 5em;
	}
}

@media (max-width: 1024px) {
	header {
		padding: 0;
		width: 100%;
	}

	header .menu-wrapper {
		margin: 0 1.7em 1.7em 1.7em;
		padding: 1.7em;
		width: calc(100vw - 3.4em);
		box-sizing: border-box;
		height: 5.4em;

		background-color: var(--color-white-transparent);
		backdrop-filter: blur(10px);

		display: flex;
		align-items: flex-end;
		gap: 2.3em;
		flex-wrap: wrap;
	}

	header .menu-wrapper.active {
		background-color: var(--color-dark);
		width: calc(100vw - 3.4em);
		height: 21em;
	}

	header .menu-wrapper.active a,
	header .menu-wrapper.active .menu-link {
		color: var(--color-white);
	}

	header .menu-wrapper.active a:hover,
	header .menu-wrapper.active .menu-link:hover,
	header .menu-wrapper.active .router-link-exact-active,
	header .menu-wrapper.active .menu-link.router-link-exact-active {
		color: var(--color-primary);
	}

	header .menu-wrapper.active .burger-icon span {
		background-color: var(--color-white);
	}

	header .menu-logo {
		display: block;
		margin-right: auto;
		height: 2em;
	}

	.burger-icon {
		display: flex;
	}

	header .menu-wrapper .menu-content {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition: max-height 0.4s ease-in-out, opacity 0.1s ease-in-out;
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