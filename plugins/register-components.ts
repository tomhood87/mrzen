import type { NuxtApp } from 'nuxt/app'
import HelloWorld from "../components/HelloWorld.vue";

export default (nuxtApp: NuxtApp) => {
  nuxtApp.vueApp.component('HelloWorld', HelloWorld)
}
