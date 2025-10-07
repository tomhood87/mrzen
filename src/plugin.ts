import { defineNuxtPlugin } from '#app'
import ClientDefaultLayout from './layouts/default.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('NuxtLayout', ClientDefaultLayout)
})
