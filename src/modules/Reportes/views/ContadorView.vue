<template>
  <h3>{{ store.numero }} x 2 = {{ store.times2 }}</h3>
  <button @click="store.increment(1)">Incrementar</button>
</template>

<script setup>
import { useIndexStore } from "../store";
const store = useIndexStore();
</script>
