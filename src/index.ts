import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  message?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@tomhood87/mrzen',
    configKey: 'mrzen'
  },
  defaults: {
    message: 'Hello from Client Package!'
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Register plugin (optional)
    addPlugin(resolver.resolve('./plugin'))

    // Add a test route
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'client-mrzen',
        path: '/client-mrzen',
        file: resolver.resolve('./pages/Test.vue')
      })
    })

    nuxt.hook('app:resolve', () => {
      const dirs = nuxt.options.dirs || {}
      const layoutsDir = dirs.layouts || nuxt.options._layers?.[0]?.config?.dirs?.layouts

      if (Array.isArray(nuxt.options.dirs?.layouts)) {
        nuxt.options.dirs.layouts.push(resolver.resolve('./layouts'))
      } else if (layoutsDir) {
        nuxt.options.dirs.layouts = [layoutsDir, resolver.resolve('./layouts')]
      } else {
        console.warn('Could not extend layouts directory — fallback skipped')
      }
    })

    console.log(`@tomhood87/mrzen loaded with message: ${options.message}`)
  }
})
