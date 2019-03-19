import * as mylib from '../../src'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css'
// import 'tempusdominus-bootstrap-4'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
	const $ = require('jquery')
	window.$ = $
	const VueInputMask = require('vue-inputmask').default
	library.add(faCheckSquare, faSquare)
	Vue.component('fa', FontAwesomeIcon)

	window.moment = moment
	require('tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.js')
	Vue.use(VueInputMask)
  Vue.use(mylib)
}