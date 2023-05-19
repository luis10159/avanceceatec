<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <h2 class="logo"><a-typography-text strong>Logo</a-typography-text></h2>
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="dark">
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <TableOutlined />
            <span strong>Tabla</span>
          </span>
        </template>
        <a-menu-item key="1"><edit-outlined /> <router-link :to="{ name: 'plan-contable' }"> Plan
            Contable</router-link></a-menu-item>
        <a-menu-item key="2"><check-square-outlined /> Grupos contables</a-menu-item>
        <a-menu-item key="3"><check-square-outlined /> Dptp. Empresarial</a-menu-item>
        <a-menu-item key="4"><check-square-outlined /> Centro de costos</a-menu-item>
        <a-menu-item key="5"><check-square-outlined /> Bancos</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <TableOutlined />
            <span strong>Tabla General</span>
          </span>
        </template>
        <a-menu-item key="10"><check-square-outlined /> Tipo de documento</a-menu-item>
        <a-menu-item key="11"><check-square-outlined /> Unidad económica</a-menu-item>
        <a-menu-item key="12"><check-square-outlined /> Zona</a-menu-item>
        <a-menu-item key="13"><check-square-outlined /> Tipo de moneda</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span>
            <ContainerOutlined />
            <span strong>Reportes</span>
          </span>
        </template>
        <a-menu-item key="20"><check-square-outlined /> Diario simplificado</a-menu-item>
        <a-menu-item key="21"><check-square-outlined /> Libro mayor</a-menu-item>
        <a-menu-item key="22"><check-square-outlined /> Libro Caja y Bancos</a-menu-item>
        <a-menu-item key="23"><check-square-outlined /> <router-link :to="{ name: 'registro-compras' }"> Registro de compras</router-link></a-menu-item>
        <a-menu-item key="24"><check-square-outlined /> <router-link :to="{ name: 'datos-principales' }"> opciones</router-link></a-menu-item>
        <a-menu-item key="25"><check-square-outlined /> Registro de ventas</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #title>
          <span>
            <ToolOutlined />
            <span strong>Herramientas</span>
          </span>
        </template>
        <a-menu-item key="30"><check-square-outlined /> <router-link :to="{ name: 'parametros' }"> Parametros</router-link></a-menu-item>
        <a-menu-item key="31"><check-square-outlined /> Abrir mes proceso</a-menu-item>
        <a-menu-item key="32"><check-square-outlined /> Cerrar mes proceso</a-menu-item>
        <a-menu-item key="33"><check-square-outlined /> Reabrir mes proceso</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5">
        <template #title>
          <span>
            <BankOutlined />
            <span strong>Empresa</span>
          </span>
        </template>
        <a-menu-item key="40">Inicializar el sistema</a-menu-item>
        <a-menu-item key="41"><check-square-outlined /> <router-link :to="{ name: 'crear-empresa' }"> Crear
            empresa</router-link></a-menu-item>
        <a-menu-item key="43"><check-square-outlined /> <router-link :to="{ name: 'crear-zona' }"> Crear
            zona</router-link></a-menu-item>
        <a-menu-item key="44"><check-square-outlined /> <router-link :to="{ name: 'crear-unidad' }"> Crear
            Unidad</router-link></a-menu-item>
        <a-menu-item key="45"><check-square-outlined /> <router-link
            :to="{ name: 'mes-proceso' }"> Aperturar mes proceso</router-link></a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import {

  TableOutlined,
  ContainerOutlined,
  BankOutlined,
  ToolOutlined,
  EditOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons-vue";
import { ref } from 'vue'

const collapsed = ref(false);

const selectedKeys = ref([""]);
</script>

<style lang="scss" scoped>
.logo {
  min-height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  border-radius: 15px;
}</style>