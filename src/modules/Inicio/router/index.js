
export default {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "inicio" */ '@/modules/Inicio/views/DashboardView.vue')

}

