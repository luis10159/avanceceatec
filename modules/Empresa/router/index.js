export default {
  children: [
    {
      path: "/crear-empresa",
      name: "crear-empresa",
      component: () =>
        import(
          /* webpackChunkName: "crear-empresa" */ "@/modules/Empresa/views/CrearEmpresaView.vue"
        ),
    },
    {
      path: "/asignar-empresa",
      name: "asignar-empresa",
      component: () =>
        import(
          /* webpackChunkName: "asignar-empresa" */ "@/modules/Empresa/views/AsignarEmpresaView.vue"
        ),
    },
    {
      path: "/crear-zona",
      name: "crear-zona",
      component: () =>
        import(
          /* webpackChunkName: "crear-zona" */ "@/modules/Empresa/views/CrearZonaView.vue"
        ),
    },
    {
      path: "/crear-unidad",
      name: "crear-unidad",
      component: () =>
        import(
          /* webpackChunkName: "crear-unidad" */ "@/modules/Empresa/views/CrearUnidadView.vue"
        ),
    },
    {
      path: "/mes-proceso",
      name: "mes-proceso",
      component: () =>
        import(
          /* webpackChunkName: "mes-proceso" */ "@/modules/Empresa/views/MesProcesoView.vue"
        ),
    },
  ],
};
