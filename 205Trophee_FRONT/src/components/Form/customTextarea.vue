<script setup>
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
    info: {
        type: String,
        required: false,
    },
    rows: {
        type: Number,
        required: false,
		default: 10
    },
    modelValue: {
        required: false,
    },
});
defineEmits(["update:modelValue"]);

</script>

<template>
    <div class="textarea-contain">
        <textarea
            :type="props.type"
            :placeholder="props.label"
            :value="props.modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
			rows="10"
        ></textarea>
        <span v-if="props.label">{{ props.label }}</span>
        <div v-if="props.info" class="div-info">{{ props.info }}</div>
    </div>
</template>

<style scoped>

textarea {
    position: relative;
    padding: 0.5em 1em;
    background-color: transparent;
    border: 1px solid var(--color-border);
	border-radius: 0.5em;
    outline: none;
    width: 100%;
    font-size: medium;
    color: var(--color-text);
	resize: none;
}

.textarea-contain {
    position: relative;
    padding-top: 1.5em;
    width: 100%;
}

.textarea-contain textarea::placeholder {
    opacity: 0;
}

.textarea-contain textarea {
    z-index: 2;
}

.textarea-contain span {
    position: absolute;
    top: 0;
    left: 0.25em;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    user-select: none;
    font-size: medium;
}

.textarea-contain textarea:placeholder-shown~span {
    top: 2.1em;
    left: 1em;
    opacity: 0.6;
}

.textarea-contain div.div-info {
    font-size: small;
    opacity: 0.8;
    padding-left: 0.2em;
}
</style>