import * as LayerComponents from '../components'

export function registerLayerComponents(vueApp: any) {
  Object.entries(LayerComponents).forEach(([name, component]) => {
    vueApp.component(name, component)
  })
}