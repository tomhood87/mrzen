import { defineNuxtPlugin } from '#app'
import * as LayerComponents from '../components'

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(LayerComponents).forEach(([name, component]) => {
    if (component) {
      nuxtApp.vueApp.component(name, component)
    }
  })
})
