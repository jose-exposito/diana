import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";

import DashboardView from "../views/DashboardView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView
    }
]

const router:Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router