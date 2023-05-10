import MainLayout from '@/modules/login/layouts/MainLayout.vue'
export default {
    component: MainLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "inicio" */ '@/modules/Login/views/LoginView.vue')
      },

    ],
}

