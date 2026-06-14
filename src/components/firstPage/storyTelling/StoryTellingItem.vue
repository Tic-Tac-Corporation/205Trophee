<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    backgroundUrl: {
        type: String,
        required: true
    }
});

import { computed } from 'vue'

// transforme le chemin en vrai URL exploitable par Vite
const bgStyle = computed(() => ({
    backgroundImage: `url(${new URL(`../../../assets/${props.backgroundUrl}`, import.meta.url).href})`
}))
</script>

<template>
    <div class="container">
        <div class="background" :style="bgStyle">
            <div class="title">
                <span>{{ title }}</span>
            </div>
        </div>
        <div class="link">{{ title }}</div>
    </div>
</template>

<style scoped>
.container {
    display: block;
    min-width: 300px;
    max-width: 30%;
    width: 100%;
    min-height: 70vh;
    max-height: 70vh;
    height: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

div.background {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(70vh - 1.8em);
    border-radius: 0.5em;
    overflow: hidden;
}

div {
    font-size: x-large;
}

div.title {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    font-size: 50px;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    user-select: none;
}

.container:hover div.title {
    opacity: 1;
}

.link {
    padding: 0.3em 0.5em;
    color: var(--color-boue);
}
</style>