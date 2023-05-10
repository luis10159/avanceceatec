<template>
  <a-row justify="center">
    <a-col>
      <a-typography-title :level="3">Unidad</a-typography-title>
    </a-col>
  </a-row>
  <CrearZona></CrearZona>
  <TablaZona></TablaZona>
</template>

<script setup>
import {ref, defineAsyncComponent}  from 'vue'
const CrearZona = defineAsyncComponent(() => import('@/modules/Empresa/components/CrearZona.vue'));
const TablaZona = defineAsyncComponent(() => import('@/modules/Empresa/components/TablaZona.vue'));
</script>

<style lang="scss" scoped>

</style>