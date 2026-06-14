<script setup>
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
</script>

<template>
    <Menu />

    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
