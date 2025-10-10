<script setup lang="ts">
const { data:menu } = await useFetch('/api/menu')
const { data: settings } = await useAsyncData('site-settings', () =>
  $fetch('/api/site-settings')
)
// Computed variables.
//
const filteredMenu = computed(() => {
  const items = Array.isArray(menu.value?.data) ? menu.value.data : (Array.isArray(menu.value) ? menu.value : [])
  return items.filter(item => item.slug !== '/')
})
</script>

<template>
  <header id="header-layout-one" class="mz-header">
    <!-- Logo -->
    <div class="mz-header__logo">
      <NuxtLink to="/">
        <img
          v-if="settings?.logo?.src"
          :src="settings.logo.src"
          :alt="settings.name || 'Site logo'"
          class="h-10 w-auto"
        />
        <span v-else class="font-bold text-lg">{{ settings?.name || 'Site Name' }}</span>
      </NuxtLink>
    </div>
    <!-- Navigation -->
    <nav class="d-none d-lg-block mb-3">
      <ul class="mz-list mz-list--menu">
        <li
          v-for="(item, i) in filteredMenu"
          :key="i"
          class="mz-link"
        >
          <NuxtLink :to="`${item.slug}`">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
