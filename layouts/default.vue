<script setup lang="ts">
import Header from '~/layouts/header/index.vue'
import Footer from '~/layouts/footer/index.vue'
</script>

<template>
  <Header />
  <div class="mz-layout-default mrzen-default-layout">
    <!-- Page content -->
    <main class="flex-1 container mx-auto p-6">
      <slot />
    </main>
  </div>
  <Footer />
</template>