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

    // Optional: example plugin
    addPlugin(resolver.resolve('./plugin'))

    // Example: add test page
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'client-mrzen',
        path: '/client-mrzen',
        file: resolver.resolve('./pages/Test.vue')
      })
    })

    nuxt.hook('modules:done', () => {
      const tenantLayouts = resolver.resolve('./layouts')

      // Add to Nuxt layer dirs (Nuxt 4 compatible)
      if (Array.isArray(nuxt.options._layers)) {
        nuxt.options._layers.unshift({
          config: { srcDir: tenantLayouts },
        })
        console.log(`Tenant layouts registered from: ${tenantLayouts}`)
      } else {
        console.warn('Could not access nuxt.options._layers — skipping layout registration')
      }
    })

    console.log(`@tomhood87/mrzen loaded with message: ${options.message}`)
  }
})
