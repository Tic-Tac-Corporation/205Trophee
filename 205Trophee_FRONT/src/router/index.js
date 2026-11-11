import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		// PAGES
		{
			path: '/project',
			name: 'Project',
			component: () => import('../views/ProjectView.vue'),
		},
		{
			path: '/car',
			name: 'Car',
			component: () => import('../views/CarView.vue'),
		},
		{
			path: '/com',
			name: 'Communication',
			component: () => import('../views/CommunicationView.vue'),
		},
		{
			path: '/sponsors',
			name: 'Sponsors',
			component: () => import('../views/SponsorsView.vue'),
		},

		{
			path: '/contact',
			name: 'Contact',
			component: () => import('../views/Contact.vue'),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
})

export default router