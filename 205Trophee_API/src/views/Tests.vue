<script setup lang="ts">
import { ref } from 'vue';
import Input from '../components/Form/Input.vue';
import Submit from '@/components/Form/Submit.vue';

const inputValue = ref('');

</script>

<template>
	<Input label="Input test" v-model="inputValue"/>
	<br>
	<Submit label="Valider" />
</template>

<style lang="css" scoped></style>