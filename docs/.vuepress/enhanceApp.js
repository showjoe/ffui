import * as ffui from '../../src'
import Vue from 'vue'
import './styles/app.scss';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight, faSquare, faCheck, faCheckSquare, faChessQueen, faCircle, faCoffee, faCog, faEdit, faTimes, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import VueDummy from "vue-dummy"
import VueI18n from 'vue-i18n'
import i18n from './i18n'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  /* This allows i18n to work within Vuepress */
  Object.assign(options, {i18n})
  // Vue.use(VueI18n)
  Vue.use(ffui)
  Vue.use(VueDummy)
  if (typeof window !== "undefined") {
    // const VueInputMask = require('vue-inputmask').default
    // Vue.use(VueInputMask)
  }
  library.add(faArrowCircleRight, faSquare, faCheck, faCheckSquare, faCircle, faCoffee, faCog, faEdit, faTimes, faChessQueen, faSearch, faSpinner)
  Vue.component('fa', FontAwesomeIcon)
  Vue.component('fa-layers', FontAwesomeLayers)
  Vue.component('fa-layers-text', FontAwesomeLayersText)
}