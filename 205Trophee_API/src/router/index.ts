import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import Projet from '@/views/Projet.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/projet',
            name: 'project',
            component: Projet
        },
    ],
})

export default router
