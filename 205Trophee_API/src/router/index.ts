import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import Projet from '@/views/Projet.vue'
import Sponsors from '@/views/Sponsors.vue'
import Contributeurs from '@/views/Contributeurs.vue'

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
        {
            path: '/sponsors',
            name: 'sponsors',
            component: Sponsors
        },
        {
            path: '/contributeurs',
            name: 'contributors',
            component: Contributeurs
        },
    ],
})

export default router
