<script setup lang="ts">
const { data:menu } = await useFetch('/api/menu')
</script>

<template>
  <header id="header-layout-one" class="mz-header">
    <nav>
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
