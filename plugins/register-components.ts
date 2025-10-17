import { defineNuxtPlugin } from 'nuxt/app'
import HelloWorld from "../components/HelloWorld.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('HelloWorld', HelloWorld)
})
