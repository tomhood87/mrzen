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

    // Optional plugin
    addPlugin(resolver.resolve('./plugin'))

    // Add test page
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'client-mrzen',
        path: '/client-mrzen',
        file: resolver.resolve('./pages/Test.vue')
      })
    })

    nuxt.hook('modules:done', () => {
      const tenantRoot = resolver.resolve('.')

      // Add as an extra layer (Nuxt will discover layouts/pages/components)
      //
      nuxt.options._layers.unshift({
        config: {
          srcDir: tenantRoot,
        }
      })

      console.log(`Tenant layer registered from: ${tenantRoot}`)
    })

    console.log(`@tomhood87/mrzen loaded with message: ${options.message}`)
  }
})
