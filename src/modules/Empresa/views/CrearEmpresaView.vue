<template>
  <a-row justify="center">
    <a-col>
      <a-typography-title :level="3">Empresa</a-typography-title>
    </a-col>
  </a-row>
  <CrearEmpresa></CrearEmpresa>
  <TablaEmpresa></TablaEmpresa>

  
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const CrearEmpresa = defineAsyncComponent(() => import('@/modules/Empresa/components/CrearEmpresa.vue'));
const TablaEmpresa = defineAsyncComponent(() => import('@/modules/Empresa/components/TablaEmpresa.vue'));

</script>
