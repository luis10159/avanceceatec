<template>
  <nav>
    <router-link :to="{ name: 'tabla' }">Tabla</router-link> |

    <router-link :to="{ name: 'plan-contable' }">Plan contable</router-link> |

  </nav>
  <router-view></router-view>
</template>
<style>
.router-link-exact-active {
  color: #42b983;
}
</style>
