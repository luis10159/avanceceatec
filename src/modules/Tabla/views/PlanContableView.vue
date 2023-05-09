<template>
  <!-- Componente para crear cuenta -->
  <!-- <a-row>
    <a-button type="primary" @click="showDrawer" class="btn-margin">
      <template #icon>
        <PlusOutlined />
      </template>
      Crear cuenta
    </a-button>
    <a-select placeholder="Seleccione el año">
      <a-select-option value="2021">2021</a-select-option>
      <a-select-option value="2022">2022</a-select-option>
      <a-select-option value="2023">2023</a-select-option>
    </a-select>
  </a-row> -->
  <a-row justify="center">
    <a-col>
      <a-typography-title>Plan contable</a-typography-title>
    </a-col>
  </a-row>
  <CrearCuenta></CrearCuenta>
  <!-- Componente para editar cuenta-->
  <!-- <EditarCuenta></EditarCuenta> -->
  <!-- Componente tabla-->
  <TablaCuenta></TablaCuenta>
</template>

<script setup>

import { defineAsyncComponent } from 'vue';
// importando los componentes
const CrearCuenta = defineAsyncComponent(() => import('@/modules/Tabla/components/CrearCuenta.vue'));
const TablaCuenta = defineAsyncComponent(() => import('@/modules/Tabla/components/TablaCuenta.vue'));
const EditarCuenta = defineAsyncComponent(() => import('@/modules/Tabla/components/EditarCuenta.vue'));

</script>

<style lang="scss" scoped></style>