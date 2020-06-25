import * as components from './components'
import * as directives from './directives'
const componentList = {
  alert: {},
  badge: {},
  btn: {},
  btnGroup: {},
  card: {},
  cardGroup: {},
  checkbox: {},
  collapse: {},
  column: {},
  datepicker: {},
  dropdown: {},
  feedback: {},
  formGroup: {},
  inputGroup: {},
  listGroup: {},
  listGroupItem: {},
  media: {},
  modal: {},
  navBar: {},
  navItem: {},
  number: {},
  popover: {},
  modalGuide: {},
  progressBar: {},
  radio: {},
  row: {},
  slider: {},
  tabContent: {},
  tabPane: {},
  textbox: {},
  tooltip: {},
  typeahead: {},
}
const directiveList = {
  mask: {},
  popover: {},
  tooltip: {}
}
const install = (Vue, options = {}) => {
  for (let key in componentList) {
    if (options.components?.skip && options.components.skip.includes(key)) continue;
    // let kc_key = pascalToKebabCase(key)
    let _key = options.prefix ? options.prefix + key : key
    // console.log(__dirname) 
    Vue.component(_key, components[key])
    // Vue.component(_key, () => import( /* webpackChunkName: "ffui" */  __dirname + '/components/' + kc_key + '.vue').then(alert => alert));
  }
  for (let key in directiveList) {
    if (options.directives?.skip && options.directives.skip.includes(key)) continue;
    // let kc_key = pascalToKebabCase(key)
    let _key = options.prefix ? options.prefix + key : key
    Vue.directive(_key, directives[key])
    // Vue.directive(_key, import( /* webpackChunkName: "ffui_d_" */ './directives/' + kc_key + '.js').then(alert => alert))
  }
}
// const pascalToKebabCase = (string) => {
//   return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
// }
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