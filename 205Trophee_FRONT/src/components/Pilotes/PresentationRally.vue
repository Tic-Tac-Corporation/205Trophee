<script setup>
const props = defineProps({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	}
});
</script>

<template>
	<RouterLink :to="`/pilote/${link}`" class="no-link">
		<div class="pilote">
			<div class="first-line">
				<div class="pilote-firstname">{{ firstname }}</div>
			</div>

			<div class="second-line">
				<img class="flag" src="@/assets/flag_fr.png" alt="[FR]">
				<div class="pilote-lastname">{{ lastname }}</div>
			</div>
		</div>
	</RouterLink>
</template>

<style scoped>
.pilote {
	display: flex;
	gap: 0 0.7em;
	flex-direction: column;
	font-family: 'russo-one';
	font-size: 18px;
}

.pilote .flag {
	height: 23px;
	border: 1px solid white;
}

.pilote .first-line {
	display: flex;
	justify-content: flex-end;
	position: relative;
	top: 9px;
}

.pilote .second-line {
	display: flex;
	gap: 0.7em;
	align-items: center;
	font-size: larger;
	font-weight: bold !important;
}

.pilote-lastname {
	text-transform: uppercase;
}
</style>
