<script setup lang="ts">
import { useAppConfig } from '#app'
const { myLayer } = useAppConfig()
const props = defineProps<{
  label?: string
}>()
</script>

<template>
  <div>
    <h1>Hello World! <span v-if="props.label">{{ props.label }}</span></h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
