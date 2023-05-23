<template>
    
        <div>{{ pokemons.count }}</div>

</template>

<script setup>
import { ref, defineAsyncComponent  } from 'vue'
import useAuth from '@/store/auth'
const store = useAuth();
const pokemons = ref([])
pokemons.value = await store.obtenerDatos()

</script>

<style lang="scss" scoped></style>