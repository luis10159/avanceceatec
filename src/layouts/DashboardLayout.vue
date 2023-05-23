<template>
    
    <article>
        <a-layout class="layout">
            <dashsidebar></dashsidebar>
            <a-layout>
                <dashheader></dashheader>
                <a-layout-content style="margin: 0 16px">
                    <a-breadcrumb style="margin: 16px 0">
                        <a-breadcrumb-item>Inicio</a-breadcrumb-item>
                        <a-breadcrumb-item>tabla</a-breadcrumb-item>
                    </a-breadcrumb>
                    <div :style="{ padding: '24px', minHeight: '360px', borderRadius: '15px' }">
                        <Suspense>
                            <router-view />
                        </Suspense>
                    </div>
                </a-layout-content>
                <dashfooter></dashfooter>
            </a-layout>
        </a-layout>
    </article>

</template>
  
<script setup>

import { defineAsyncComponent } from "vue";
const dashsidebar = defineAsyncComponent(() => import('@/components/DashSideBar.vue'));
const dashheader = defineAsyncComponent(() => import('@/components/DashHeader.vue'));
const dashfooter = defineAsyncComponent(() => import('@/components/DashFooter.vue'));
</script>
<style lang="scss" scoped>
.layout {
    min-height: 100vh;
}
</style>
  