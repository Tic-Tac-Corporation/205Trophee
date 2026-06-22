<script setup lang="ts">
const props = defineProps({
    type: {
        type: String,
        required: false,
        default: 'text'
    },
    label: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
    },
    inputValue: {
        required: false,
    },
});
defineEmits(["update:inputValue"]);
</script>

<template>
	<label>{{ label }}</label>
	<input :type="props.type" v-model="props.inputValue" :placeholder="placeholder" />
</template>

<style scoped>

</style>