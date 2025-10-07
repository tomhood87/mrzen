<script setup lang="ts">
import HeaderLayoutOne from "./header/LayoutOne.vue"
import FooterLayoutOne from "./footer/LayoutOne.vue"
</script>

<template>
  <div class="mz-layout-default mrzen-default-layout">
    <!-- Header -->
    <HeaderLayoutOne />

    <!-- Page content -->
    <main class="flex-1 container mx-auto p-6">
      <slot />
    </main>

    <!-- Footer -->
    <FooterLayoutOne />
  </div>
</template>