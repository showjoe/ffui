import * as ffui from '../../src'
import { btnGroup } from '../../src/bundle'
import Vue from 'vue'
import './styles/app.scss';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight, faSquare, faCheck, faCheckSquare, faChessQueen, faCircle, faCoffee, faCog, faEdit, faTimes, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import VueDummy from "vue-dummy"
import VueI18n from 'vue-i18n'
import i18n from './i18n'
console.log(btnGroup) 
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  /* This allows i18n to work within Vuepress */
  Object.assign(options, { i18n })

console.log(ffui) 
  
  Vue.use(ffui)
  Vue.use(VueDummy)

  library.add(faArrowCircleRight, faSquare, faCheck, faCheckSquare, faCircle, faCoffee, faCog, faEdit, faTimes, faChessQueen, faSearch, faSpinner)
  Vue.component('fa', FontAwesomeIcon)
  Vue.component('fa-layers', FontAwesomeLayers)
  Vue.component('fa-layers-text', FontAwesomeLayersText)
}