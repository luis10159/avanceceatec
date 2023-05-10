import MainLayout from '@/modules/Tabla/layouts/MainLayout.vue'
export default {
    component: MainLayout,
    children: [
      {
        path: '/plan-contable',
        name: 'plan-contable',
        component: () => import(/* webpackChunkName: "plan-contable" */ '@/modules/Tabla/views/ContadorView.vue')
      }
    ],
}
