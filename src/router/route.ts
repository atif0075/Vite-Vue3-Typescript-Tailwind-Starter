import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        meta: { title: 'Home' },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/store',
        meta: { title: 'store' },
        component: () => import('../views/Store.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        name: '404',
        meta: { title: '404' },
        component: () => import('../views/404.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'text-yellow',
})

export default router
