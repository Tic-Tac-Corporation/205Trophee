<script setup>
import { onMounted, ref } from 'vue';
import StoryTellingItem from './storyTelling/StoryTellingItem.vue';

const show = ref(false)
const height = ref(0);
const storyTellingContainer = ref(null)

onMounted(() => {
    const storyTellingContainerObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting === true) show.value = true;
        // show.value = entry.isIntersecting;

        // if (entry?.target?.clientHeight > 200 && show.value === true) height.value = entry.target.clientHeight;

    }, {
        threshold: 0.15
    })

    storyTellingContainerObserver.observe(storyTellingContainer.value)
})
</script>

<template>
    <div id="storyTelling" ref="storyTellingContainer">
        <h1>GROS TITRE DE SECTION PA PA PA</h1>
        <div class="story-telling-container">
            <Transition>
                <template v-if="show">
                    <div class="flex-container">
                        <StoryTellingItem title="Le Projet" background-url="205trophee.jpg" />
                        <StoryTellingItem title="La 205" background-url="205.jpg" />
                        <StoryTellingItem title="La communication" background-url="communication.jpg" />
                    </div>
                </template>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
h1 {
    padding: 2em 5em 0 5em;
}

@media (max-width: 1024px) {
    h1 {
        padding: 2em;
    }
}

#storyTelling {
    min-height: 100vh;
}

.flex-container {
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em;
    padding: 3em 5em 5em 5em;
}

@media (max-width: 1024px) {
    .flex-container {
        padding: 1em 2em 2em 2em;
    }
}

.v-enter-active,
.v-leave-active {
    transition: all 1.5s ease-in-out;
}

.v-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.v-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.v-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.v-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}
</style>
