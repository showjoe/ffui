import * as components from './components'
import * as directives from './directives'

const install = (Vue, options = {}) => {
  for (let key in components) {
    let _key = options.prefix ? options.prefix + key : key
    Vue.component(_key, components[key])
  }
  for (let key in directives) {
    let _key = options.prefix ? options.prefix + key : key
    Vue.directive(_key, directives[key])
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  components,
  directives,
  install
  // rest of the component
}