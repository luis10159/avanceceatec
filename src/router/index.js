import { createRouter, createWebHistory } from "vue-router";
import Inicio from "@/modules/Inicio/router/index.js";
import Tabla from "@/modules/Tabla/router/index.js";
import Login from "@/modules/Login/router/index.js";
import MainLayout from "@/layouts/DashboardLayout.vue";
import Empresa from "@/modules/Empresa/router/index.js";
import Herramientas from "@/modules/Herramientas/router/index.js";
import Reportes from "@/modules/Reportes/router/index.js";

// import ModuloB from '../modules/TablaGeneral/router/index.js'

const routes = [
  {
    path: "/dash",
    component: MainLayout,
    children: [
      {
        ...Inicio
      },
      {
        ...Tabla
      },
      
    ],
  },
  {
    path: "/principal",
    component: MainLayout,

    ...Empresa
  },
  {
    path: "/secundario",
    component: MainLayout,

    ...Herramientas
  },
  {
    path: "/terciario",
    component: MainLayout,

    ...Reportes
  },
  {
    path: "/",
    name: "home",
    ...Login,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../views/ErrorNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
