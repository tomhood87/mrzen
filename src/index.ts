import { defineNuxtModule, addPlugin, createResolver, addNuxtLayer } from '@nuxt/kit'

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

    // Example page for testing
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'client-mrzen',
        path: '/client-mrzen',
        file: resolver.resolve('./pages/Test.vue')
      })
    })

    addNuxtLayer({
      cwd: moduleRoot,
      config: {
        srcDir: moduleRoot,
      },
    })

    console.log(`Tenant layer added from: ${moduleRoot}`)
    console.log(`@tomhood87/mrzen loaded with message: ${options.message}`)
  }
})
