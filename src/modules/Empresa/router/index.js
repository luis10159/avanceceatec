export default {
    
        path: '/crear-empresa',
        name: 'crear-empresa',
        component: () => import(/* webpackChunkName: "plan-contable" */ '@/modules/Empresa/views/CrearEmpresaView.vue')

}
