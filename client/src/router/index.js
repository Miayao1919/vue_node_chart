import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Chart from '@/components/Chart'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/chart',
            name: 'Chart',
            component: Chart
        }
    ]
})

export default router;