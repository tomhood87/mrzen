<script setup lang="ts">
const { data:menu } = await useFetch('/api/menu')
const { data: settings } = await useAsyncData('site-settings', () =>
  $fetch('/api/site-settings')
)
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
    <nav class="mb-3">
      <ul class="mz-list mz-list--menu">
        <li
          v-for="(item, i) in menu"
          :key="i"
          class="mz-link"
        >
          <NuxtLink :to="`${item.slug}`">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
