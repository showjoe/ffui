import * as mylib from '../../src'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  // window.$ = window.jQuery = require('jquery')
  // require('bootstrap')
  // require('moment')
  if (typeof window !== "undefined") {
    const $ = require('jquery')
    window.$ = window.jQuery = $;
    const VueInputMask = require('vue-inputmask').default
    Vue.use(VueInputMask)
  }
  Vue.use(mylib)
  library.add(faTimes, faCheck)
  Vue.component('fa', FontAwesomeIcon)

}