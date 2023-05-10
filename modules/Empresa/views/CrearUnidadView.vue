<template>
  <a-row justify="center">
    <a-col>
      <a-typography-title :level="3">Unidad</a-typography-title>
    </a-col>
  </a-row>
  <CrearUnidad></CrearUnidad>
  <TablaUnidad></TablaUnidad>
</template>

<script setup>
import {ref, defineAsyncComponent}  from 'vue'
const CrearUnidad = defineAsyncComponent(() => import('@/modules/Empresa/components/CrearUnidad.vue'));
const TablaUnidad = defineAsyncComponent(() => import('@/modules/Empresa/components/TablaUnidad.vue'));
</script>

<style lang="scss" scoped>

</style>