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
    const moduleRoot = resolver.resolve('.')

    // Optional plugin
    addPlugin(resolver.resolve('./plugin'))

    // Example test page
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'client-mrzen',
        path: '/client-mrzen',
        file: resolver.resolve('./pages/Test.vue')
      })
    })

    nuxt.hook('extendLayers', (layers) => {
      layers.unshift({
        cwd: moduleRoot,
        config: {
          srcDir: moduleRoot
        }
      })
      console.log(`Tenant layer registered via extendLayers: ${moduleRoot}`)
    })

    console.log(`@tomhood87/mrzen loaded with message: ${options.message}`)
  }
})
