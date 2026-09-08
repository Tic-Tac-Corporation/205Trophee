<script setup>
import { RouterLink } from 'vue-router';
import IconMenu from './icons/IconMenu.vue';
import { ref } from 'vue';
import IconLogo from './icons/IconLogo.vue';

const menuIsTriggered = ref(false);

const triggerMenu = () => {
	if (menuIsTriggered.value === true) menuIsTriggered.value = false;
	else menuIsTriggered.value = true;

	return;
}
</script>

<template>
	<header>
		<div class="menu-wrapper" :class="{ active: menuIsTriggered }">
			<IconLogo class="menu-logo" />
			<IconMenu class="menu-icon" @click="triggerMenu" />
			<div class="menu-content">
				<RouterLink to="/">Accueil</RouterLink>
				<RouterLink to="/project">Le Projet</RouterLink>
				<RouterLink to="/">Sponsors</RouterLink>
			</div>
		</div>
	</header>
</template>

<style scoped>
header {
	display: flex;
	justify-content: center;
	padding: 1.7em 1.3em;
	gap: 1.3em;
	position: fixed;
	width: calc(100vw - 10em);
	z-index: 10;
}

header * {
	transition: all 0.2s ease-in-out;
	user-select: none;
}

header a {
	color: black;
	font-family: 'russo-one';
	font-size: 18px;
}

header .menu-wrapper {
	border-radius: 1.2em;
}

header .menu-content {
	display: flex;
	justify-content: flex-end;
	gap: 1.7em;
}

header .menu-icon {
	display: none;
}


@media (min-width: 1024px) {
	header {
		margin: 0 5em 0 5em;
	}

	header a {
		color: black;
	}

	header .menu-logo {
		position: absolute;
		left: 0%;
	}

	.menu-wrapper {
		background-color: white;
		padding: 0.5em 1em;
		-webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
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

	header .menu-logo {
		display: block;
		margin-right: auto;
	}

	header .menu-wrapper:not(.active) .menu-content {
		display: none;
	}

	header .menu-icon {
		display: block;
		cursor: pointer;
	}

	header .menu-wrapper.active .menu-content {
		flex-direction: column;
		align-items: flex-end;
		gap: 2.3em;
	}

	header .menu-logo,
	header .menu-icon {
		flex: 0 0 auto;
	}

	header .menu-content {
		flex: 0 0 100%;
	}
}
</style>