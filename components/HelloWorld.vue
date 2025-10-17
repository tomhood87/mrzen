<script setup lang="ts">
import { useAppConfig } from '#app'
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
