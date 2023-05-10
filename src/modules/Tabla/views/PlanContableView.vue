<template>
  <a-row justify="center">
    <a-col>
      <a-typography-title :level="3">Plan contable</a-typography-title>
    </a-col>
  </a-row>
  <!-- Componente para crear cuenta-->
  <CrearCuenta></CrearCuenta>


  <!-- Componente tabla-->
  <TablaCuenta></TablaCuenta>
</template>

<script setup>

import { defineAsyncComponent } from 'vue';
// importando los componentes
const CrearCuenta = defineAsyncComponent(() => import('@/modules/Tabla/components/CrearCuenta.vue'));
const TablaCuenta = defineAsyncComponent(() => import('@/modules/Tabla/components/TablaCuenta.vue'));


</script>

<style lang="scss" scoped></style>