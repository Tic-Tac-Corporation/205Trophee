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
		// PILOTES
		{
			path: '/pilote/QG',
			name: 'Quentin',
			component: () => import('../views/Pilotes/QG.vue'),
		},
		{
			path: '/pilote/QG',
			name: 'Killian',
			component: () => import('../views/Pilotes/BK.vue'),
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
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
})

export default router