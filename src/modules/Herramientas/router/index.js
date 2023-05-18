export default {
    children: [
      {
        path: '/parametros',
        name: 'parametros',
        component: () => import(/* webpackChunkName: "parametros" */ '@/modules/Herramientas/views/ParametrosView.vue')
      }
    ]
}
