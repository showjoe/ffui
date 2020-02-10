import * as ffui from '../../src'
import Vue from 'vue'
import '../../src/assets/scss/app.scss';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faChessQueen, faCircle, faCoffee, faCog, faEdit, faTimes, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import VueDummy from "vue-dummy"

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(ffui)
  Vue.use(VueDummy)
  if (typeof window !== "undefined") {
    const VueInputMask = require('vue-inputmask').default
    Vue.use(VueInputMask)
  }
  library.add(faCheck, faCircle, faCoffee, faCog, faEdit, faTimes, faChessQueen, faSearch, faSpinner)
  Vue.component('fa', FontAwesomeIcon)
  Vue.component('fa-layers', FontAwesomeLayers)
  Vue.component('fa-layers-text', FontAwesomeLayersText)
}